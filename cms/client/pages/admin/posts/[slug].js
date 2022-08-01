

import AdminLayout from "../../../components/layout/adminLayout";
import EditPostComponent from "../../../components/posts/EditPostComponent";


const EditPost = () => {

  return(
    <AdminLayout>
        <EditPostComponent sentby = "admin" />
    </AdminLayout>
  )

}

export default EditPost
