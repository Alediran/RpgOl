/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { PrimeIcons } from 'primereact/api';
import { Skeleton } from 'primereact/skeleton';
import { DataTable, DataTablePFSEvent } from 'primereact/datatable';
import { useDeleteMutation, useGetPagedSortedQuery } from 'Services/BoardCategories';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toolbar } from 'primereact/toolbar';
import Localize from 'Components/Localize/Index';
import { BoardCategoryDto } from 'Types/BoardCategories';
import { showToast } from 'Features/notificationSlice';
import { NotificationSeverity } from 'Types/Enums';
import { useAppDispatch } from 'App/Hooks';
import PagedAndSortedRequestDto from 'Types/Output/PagedAndSortedRequestDto';
import BoardCategoriesAddDialog from '../BoardCategoriesAddDialog';
import styles from './index.module.css';



const BoardCategories: React.FC = () => {  
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const dispatch = useAppDispatch();
  const [boardInput, setBoardInput] = useState<PagedAndSortedRequestDto>({sortField: 'name', sortOrder: 1, skipCount: 0, maxResultCount: 10})
  
  const {data: boardCategories, isLoading } = useGetPagedSortedQuery(boardInput);
  const [deleteCategory] = useDeleteMutation();


  const boardConfirmDelete = (id: string) => {
    setShowConfirm(true);
    setSelectedId(id);
  }

  const onPageSort = (e: DataTablePFSEvent) => {
    const changedBoardInput: PagedAndSortedRequestDto = {
      ...boardInput,
      skipCount: e.first,
      maxResultCount: e.rows,
      sortField: e.sortField,
      sortOrder: e.sortOrder
    };

    setBoardInput(changedBoardInput)
  }

  const bodyTemplate = (rowData: BoardCategoryDto, field: keyof(BoardCategoryDto)) => isLoading ? <Skeleton /> : <div>{rowData[field]?.toString()}</div>

  const actionBodyTemplate = (rowData: BoardCategoryDto) => (
    isLoading ? <Skeleton /> : <Button icon={PrimeIcons.TRASH} className='p-button-rounded' onClick={() => boardConfirmDelete(rowData.id)}/>
  );

  return <div>
    <Toolbar className="mb-4" 
      right={<Button icon={PrimeIcons.PLUS} label='Add Category' title='Add Category' type='button' onClick={() => setShowCreateCategory(true)}/>} 
    />
    <DataTable lazy value={boardCategories?.items} totalRecords={boardCategories?.totalCount}
      onSort={onPageSort}
      sortField={boardInput.sortField}
      sortOrder={boardInput.sortOrder}
      paginator
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate={`${Localize.Showing} {first} ${Localize.To.toLowerCase()} {last} ${Localize.Of.toLowerCase()} {totalRecords}`}
      first={boardInput.skipCount}
      rows={boardInput.maxResultCount}
      rowsPerPageOptions={[10,20,50]}
      onPage={onPageSort}
    >
      <Column sortable field='name' header='Name' body={(e) => bodyTemplate(e,'name')}/>
      <Column sortable field='description' header='Description' body={(e) => bodyTemplate(e,'description')} />
      <Column header='Actions' body={actionBodyTemplate} />
    </DataTable>       
    <BoardCategoriesAddDialog visible={showCreateCategory} onHide={() => setShowCreateCategory(false)} />
    <ConfirmDialog visible={showConfirm} onHide={() =>setShowConfirm(false)} header={Localize.Confirmation} message={Localize.AreYouSure} 
      accept={() => {
        deleteCategory(selectedId).unwrap()
          .then(() => dispatch(showToast({severity: NotificationSeverity.success, summary: Localize['Submit:DeleteSuccessful'], detail: ''})))
          .catch(() => dispatch(showToast({severity: NotificationSeverity.error, summary: Localize['Submit:DeleteFailed'], detail: ''})))
      }}
      reject={() =>setShowConfirm(false)}
    />
  </div>
}

export default BoardCategories;