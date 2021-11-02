import Swal from 'sweetalert2';

export const swalStyled = Swal.mixin({
  customClass: {
    confirmButton: 'swal__confirm',
    cancelButton: 'swal__cancel',
    title: 'swal__title',
    container: 'swal__text',
    actions: 'swal__actions',
  },
  buttonsStyling: false,
});
