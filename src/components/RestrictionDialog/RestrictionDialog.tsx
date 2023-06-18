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
      <div>
        {hasRestriction ? 'Tiene restricción' : 'No tiene restricción'}
      </div>
    </Dialog>
  )
}

export default RestrictionDialog
