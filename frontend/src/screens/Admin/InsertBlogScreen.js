import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPostAction } from '../../actions/postAction';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import SidebarMenu from '../../components/SidebarMenu';



function InsertBlogScreen({history}) {

    const [mainTitle,setMainTitle]=useState('')
    const [subTitle,setsubTitle]=useState('')
    const [desc,setdesc]=useState('')
    const [uploadedImageUrl,setuploadedImageUrl]=useState('')
    
    const [category,setCategoy]=useState('')
    const [language,setLanguage]=useState('')
    const [pinnedPost,setPinnedPost]=useState(false)
    const [postContents,setPostContents]=useState('')
    const [uploading , setUploading] = useState(false)
    const [checkMessage, setCheckMessage] = useState('')
    //const [successMessage,setSuccessMessage]=useState('')

    const editorRef = useRef(null);

    console.log(`Category: ${category} , Language: ${language}`)
    
    
    const dispatch = useDispatch()

  

    const userLogin = useSelector((state) => state.userLogin)
    const {userLoginInfo,userRegisterInfo} = userLogin

    const createNewPost = useSelector((state)=>state.createNewPost)
    const { error,loading, } = createNewPost

    // if(newPost){
        
    //     setSuccessMessage("Successfully Created the new post!")

    //     setCheckMessage('')
    //     setMainTitle('')
    //     setdesc('')
    //     setuploadedImageUrl('')
    //     setCategoy('')
    //     setLanguage('')
    //     setPinnedPost(false)
    //     setPostContents('')
    // }

    if(!((userLoginInfo && userLoginInfo.isAdmin) || (userRegisterInfo && userRegisterInfo.isAdmin) )){
        history.push('/adminArea/login')
    }

    const blog={
        catagory:category,
        language:language,
        mainTitle:mainTitle,
        subTitle:subTitle,
        shortDesc:desc,
        postContents:postContents,
        pinnedPost:pinnedPost,
        image:uploadedImageUrl,
    }

    console.log(blog)


    const uploadFileHandler =async (e)=>{


       

        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image',file)
        setUploading(true)

        try{
            const config = {
                headers: {
                    'Content-Type':'multipart/form-data'

                }
            }

            const {data}=await axios.post('/api/upload',formData,config)

            setuploadedImageUrl(data)
            setUploading(false)

        }catch(error){
    console.log(error)
    setUploading(false)
        }
    }



    const submitHandler = ()=>{
        dispatch(createNewPostAction(blog))
    }



 
 

    return (

        <>

<SidebarMenu/>        

            
<div className="container insertBlogScreen">
            
            <form  className="mt-2 mb-3">
                <h3 className="mt-3"> Create New Blog</h3>
                
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                             <label for="mainTitle">
                                 Main Title
                             </label>
                             <input type="text" placeholder="Write title" className="form-control" 
                             onChange={(e)=>{
                                 e.preventDefault()
                                 setMainTitle(e.target.value);
                             }}  />

                        </div>

                        <div className="form-group">
                             <label for="subTitle">
                                 Sub Title
                             </label>
                             <input type="text" placeholder="Write Subtitle"  className="form-control" 
                              onChange={(e)=>{
                                e.preventDefault()
                                setsubTitle(e.target.value);
                            }}/>
                             
                        </div>

                        <div className="form-group">
                             <label for="desc">
                                 Short Description
                             </label>
                             <textarea type="text"  placeholder="Write Short Desc"  className="form-control"
                              onChange={(e)=>{
                                e.preventDefault()
                                setdesc(e.target.value);
                            }} />
                             
                        </div>

                   

                    
                    </div>

                    <div className="col-md-6">
                     
                    <div className="form-group">
                             <label for="category">
                                 Select Category
                             </label>
                             <select  class="form-control" id="categorySelect" 
                             onChange={
                                 (e)=>{
                                     e.preventDefault()
                                     setCategoy(e.target.value)
                                 }
                             }
                             >
                                 <option value="web">Web</option>
                                 <option value="app">App</option>
                                 <option value="dsalgo">DS/Algorithom</option>
                                 <option value="cp">Competitive programming</option>
                                 <option value="aiml">AI/ML</option>
                                 <option value="oop">OOP</option>
                                 <option value="mytalk">My Talk</option>
                                 <option value="others">Others</option>
                                

                                 
                            </select>                             
                    </div>


                    <div className="form-group">
                             <label for="category">
                                 Select Language
                             </label>
                             <select class="form-control" id="languageSelect"
                              onChange={
                                (e)=>{
                                    e.preventDefault()
                                    setLanguage(e.target.value)
                                }
                            }>
                                 <option value="C++">C/C++</option>
                                 <option value="Js">Javascript</option>
                                 <option value="PHP">PHP</option>
                                 <option value="Python">Python</option>
                                 <option value="React">React/Redux</option>
                                 <option value="Nodejs">Node Js</option>

                                 
                            </select>                             
                    </div>

                    <div className="form-group">
                             <label for="category">
                                 Make Pinned Post
                             </label>
                             <select class="form-control" id="pinnedPost"
                              onChange={
                                (e)=>{
                                    e.preventDefault()
                                    setPinnedPost(e.target.value)
                                }
                            }
                            >
                                 <option value="no">No</option>

                                 <option value="yes">YES</option>

                                 
                            </select>                             
                    </div>

                    <div className="form-group">
                             <label for="Image">
                                 Upload Banner Image
                             </label>
                             <input type="file" name="image"  onChange={uploadFileHandler}/>                          
                    </div>
                    {uploading && <Loader/>}


                   </div>
                </div>

                <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         apiKey='bwg0q0j9lxtive63e9uvn074bpdjtnbkd49jxu09mpp7tnb2'
         initialValue=""
         init={{
           height: 500,
           menubar: false,
           file_picker_types: 'file image media',
           
          /* and here's our custom image picker*/
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
        
            /*
              Note: In modern browsers input[type="file"] is functional without
              even adding it to the DOM, but that might not be the case in some older
              or quirky browsers like IE, so you might want to add it to the DOM
              just in case, and visually hide it. And do not forget do remove it
              once you do not need it anymore.
            */
        
            input.onchange = function () {
              var file = this.files[0];
        
              var reader = new FileReader();
              reader.onload = function () {
                /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
        
                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };
        
            input.click();
          },
           plugins: [
             'advlist image autolink lists link  charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
         }}

         onChange={
             (e)=>{
                 e.preventDefault()

                 setPostContents(e.target.getContent())
             }
         }

       />
       

            </form>

            

            {loading && <Loader />}
            {error &&  <Message variant="danger"> {error}</Message>}

            {checkMessage && <Message variant="warning" > {checkMessage} </Message>}
            



            <button className="btn btn-lg btn-success m-5" onClick={(e)=>{
                e.preventDefault();
                if(mainTitle===''){
                    setCheckMessage("  MainTitle is required! ")
                    return;
                }

                if(subTitle===''){
                    setCheckMessage("  Subtitle is required! ")
                    return;
                }

                if(desc===''){
                    setCheckMessage("  Blog Description is required! ")
                    return;
                }

              

                if(category===''){
                    setCheckMessage("  Category is required! ")
                    return;
                }

                


                if(uploadedImageUrl===''){
                    setCheckMessage("  Banner Image is required! ")
                    return;
                }

                
                

                

                

                submitHandler()
            }}>CREATE</button>





    
</div>             
     
            
</>
    )
}

export default InsertBlogScreen
