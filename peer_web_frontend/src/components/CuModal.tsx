import React from 'react'
import Modal from '@mui/material/Modal'
import { Box, SxProps } from '@mui/material'

//   여기 있는 state를 쓰면 됩니다.
//   const [open, setOpen] = useState(false)
//   const handleOpen = () => setOpen(true) // 다른 버튼이나 요소를 얘를 활용해서 모달 핸들링 가능
//   const handleClose = () => setOpen(false)

const defaultstyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface ICuModal {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
  ariaTitle: string
  ariaDescription: string
  style?: SxProps
}

const CuModal = ({
  open,
  handleClose,
  children,
  ariaTitle,
  ariaDescription,
  style = defaultstyle,
}: ICuModal) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={ariaTitle}
        aria-describedby={ariaDescription}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  )
}

export default CuModal