import React from 'react'
import Swal from 'sweetalert2'

const ShowAlert = (title, text, icon) => {
  return (
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: "Okay",
    })
  )
}

export default ShowAlert
