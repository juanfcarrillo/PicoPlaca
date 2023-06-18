import { Dialog } from '@mui/material'
import React from 'react'
export interface RestrictionDialogProps {
  open: boolean
  onClose?: () => void
  hasRestriction?: boolean
}

const RestrictionDialog: React.FC<RestrictionDialogProps> = ({ open, onClose, hasRestriction }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className={`${hasRestriction ? 'bg-red-900' : 'bg-lime-800'} p-11 rounded-sm`}>
        <span className='text-white font-bold'>{hasRestriction ? 'Tiene restricción' : 'No tiene restricción'}</span>
      </div>
    </Dialog>
  )
}

export default RestrictionDialog
