/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import ErrorHandling from "Components/ErrorHandling";
import { useGetByBoardIdQuery } from "Services/Threads";
import Localize from "Components/Localize/Index";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import CreateThread from "./CreateThread";

interface Props {
  id?: string;
  title?: string;
}

const Threads: React.FC<Props> = ({id, title}) => {
  const {data: threads, isLoading: threadsLoading, isError, error } = useGetByBoardIdQuery(id);
  const [threadModal, setThreadModal] = useState(false);

  if (threadsLoading) return <div>Loading Threads</div>
  
  if (isError && 'status' in error) return <ErrorHandling error={error} />

  if (!id) return <div>Wrong id</div>

  return <div className="card">
    <Toolbar className="mb-4" style={{padding: '0.457rem 1rem', border: '0px'}} left={
      <div className="title">{title}</div>
    } 
    right={
      <Button label={Localize.NewThread} className="p-button-sm" onClick={() => setThreadModal(true)}/>
    } />
    <DataTable value={threads} responsiveLayout="scroll" emptyMessage={Localize.EmptyResults}>
      <Column header={Localize.Title} field='name' />
      <Column header={Localize.Replies} field='posts.length' />
    </DataTable>
    <Dialog header={Localize.NewThread} visible={threadModal} onHide={() => setThreadModal(false)}>
      <CreateThread boardId={id} onSubmit={() => setThreadModal(false)} />
    </Dialog>
  </div>
}

export default Threads;