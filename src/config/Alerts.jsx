import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (msg='An Error Occured', type="error")=> toast.error(msg)

export default notify ;