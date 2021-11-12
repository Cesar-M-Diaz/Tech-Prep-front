import Swal from 'sweetalert2';
import '../assets/styles/components/Swal.scss';

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

export const swalStyledDelete = Swal.mixin({
  customClass: {
    confirmButton: 'swal__delete',
    cancelButton: 'swal__delete-cancel',
    title: 'swal__title',
    container: 'swal__text',
    actions: 'swal__actions',
  },
  buttonsStyling: false,
});
