import AuthorLayout from "../../../components/layout/authorLayout";
import EditPostComponent from "../../../components/posts/EditPostComponent";


const EditPost = () => {

  return(
    <AuthorLayout>
        <EditPostComponent sentby="author" />
    </AuthorLayout>
  )

}

export default EditPost