function EditCreator () {

    const handleDelete = async () => {
        const { data, error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id);
        if (error) {
          console.error(error);
        } else {
          // Redirect to home page after deletion
          window.location = '/';
        }
      };
    return (
        <div>
        <h1>Edit Creator</h1>
        </div>
    );
};

export default EditCreator;