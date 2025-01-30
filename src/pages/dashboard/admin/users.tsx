import React from 'react'
import UsersTable from '../../../components/Table/UsersTable'
import { useParams } from 'react-router-dom';

function UsersPage() {
    const { id } = useParams();
  return (
    <UsersTable company_id={ id as string} />
  )
}

export default UsersPage