/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { PrimeIcons } from 'primereact/api';
import { DataTable, DataTablePFSEvent } from 'primereact/datatable';
import { useDeleteMutation, useGetPagedSortedQuery } from 'Services/BoardCategories';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toolbar } from 'primereact/toolbar';
import Localize from 'Components/Localize/Index';
import { BoardCategoryDto, BoardCategoryInput } from 'Types/BoardCategories';
import { showToast } from 'Features/notificationSlice';
import { NotificationSeverity } from 'Types/Enums';
import { useAppDispatch } from 'App/Hooks';
import BoardCategoriesAddDialog from '../BoardCategoriesAddDialog';
import styles from './index.module.css';

const BoardCategories: React.FC<{}> = ({}) => {  
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const dispatch = useAppDispatch();
  const [boardInput, setBoardInput] = useState<BoardCategoryInput>({sortField: 'name', sortOrder: 1, skipCount: 0, maxResultCount: 10})
  
  const {data: boardCategories, isLoading, isFetching } = useGetPagedSortedQuery(boardInput);
  const [deleteCategory] = useDeleteMutation();


  const boardConfirmDelete = (id: string) => {
    setShowConfirm(true);
    setSelectedId(id);
  }

  const onPage = (e: DataTablePFSEvent) => {
    setBoardInput({
      sortField: e.sortField,
      sortOrder: e.sortOrder,
      skipCount: e.page ? e.page * e.rows : 0 * e.rows,
      maxResultCount: e.rows
    })
  }

  const actionBodyTemplate = (rowData: BoardCategoryDto) => (
    <Button icon={PrimeIcons.TRASH} className='p-button-rounded' onClick={() => boardConfirmDelete(rowData.id)}/>
  );

  if (isLoading) return <div />
  
  if (isFetching) return <div />
  
  return <div>
    <div>Board Categories component</div>
    <Toolbar className="mb-4" 
      left={<Button icon={PrimeIcons.PLUS} label='Add Category' title='Add Category' type='button' onClick={() => setShowCreateCategory(true)}/>} 
    />
    <DataTable value={boardCategories?.items} paginator 
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate={`${Localize.Showing} {first} ${Localize.To.toLowerCase()} {last} ${Localize.Of.toLowerCase()} {totalRecords}`}
      rows={boardInput.maxResultCount} onPage={onPage}
      rowsPerPageOptions={[10,20,50]}
      sortField={boardInput.sortField}
      sortOrder={boardInput.sortOrder}
    >
      <Column field='name' header='Name' />
      <Column field='description' header='Description' />
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