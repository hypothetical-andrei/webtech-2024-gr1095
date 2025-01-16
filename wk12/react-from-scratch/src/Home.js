import React, { useState, useEffect } from 'react'
import UniversityStore from './stores/UniversityStore'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'

const store = new UniversityStore()

const Home = () => {
  const [ universities, setUniversities ] = useState([])
  const [ universityCount, setUniversityCount ] = useState(0)
  const [ isDialogShown, setIsDialogShown ] = useState(false)
  const [ universityName, setUniversityName ] = useState('')
  const [ pageNumber, setPageNumber ] = useState(0)
  const [ pageSize, setPageSize ] = useState(10)
  const [ sortField, setSortField ] = useState('')
  const [ sortOrder, setSortOrder ] = useState('ASC')
  const [ filterField, setFilterField ] = useState('')
  const [ filterContent, setFilterContent ] = useState('')
  const [ firstRecord, setFirstRecord ] = useState(0)

  useState(() => {
    store.emitter.addListener('GET_ALL_SUCCESS', () => {
      setUniversities(store.data)
      setUniversityCount(store.count)
    })
  }, [])

  useEffect(() => {
    store.getAll(pageNumber, pageSize, sortField, sortOrder, filterField, filterContent)
  }, [pageNumber, pageSize, sortField, sortOrder, filterField, filterContent])

  const addClickHandler = (evt) => {
    setIsDialogShown(true)
  }

  const tableFooter = (
    <div>
      <Button label='Add one' onClick={addClickHandler} />
    </div>
  )

  const saveItem = (evt) => {
    store.addOne({
      universityName
    })
    setIsDialogShown(false)
  }

  const dialogFooter = (
    <div>
      <Button label='Save' onClick={saveItem} />
    </div>
  )

  const handlePageChange = (evt) => {
    setPageNumber(evt.page)
    setPageSize(evt.rows)
    setFirstRecord(evt.first)
  }

  const handleSort = (evt) => {
    setSortField(evt.sortField)
    setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC')
  }

  const handleFilter = (evt) => {
    console.warn(evt)
  }

  return (
    <div>
      <h3>List of universities</h3>
      <DataTable 
        value={universities} 
        footer={tableFooter}
        paginator
        rows={pageSize}
        rowsPerPageOptions={[ 2, 5, 10 ]}
        onPage={handlePageChange}
        onSort={handleSort}
        totalRecords={universityCount}
        first={firstRecord}
        lazy
        onFilter={handleFilter}
        filterDisplay="row"
      >
        <Column 
          field='universityName' 
          header='University name' 
          sortable 
          filter 
          filterPlaceholder='name' 
          showFilterMenu={false} 
        />
      </DataTable>
      {
        isDialogShown ? (
          <Dialog onHide={() => setIsDialogShown(false)} visible={isDialogShown} footer={dialogFooter}>
            <InputText value={universityName} onChange={(evt) => setUniversityName(evt.target.value)} placeholder='Name of university' />
          </Dialog>
        ) : null
      }
    </div>
  )
}

export default Home