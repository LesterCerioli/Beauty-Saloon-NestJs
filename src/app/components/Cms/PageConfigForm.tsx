import { useState } from "react";


const PageConfigForm = () => {
    const [title, setTitle] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [textColor, setTextColor] = useState("#000000");
    const [image, setImage] = useState<File | null>(null);
    const [posts, setPosts] = useState<string[]>([]);
    const [newPost, setNewPost] = useState("");

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleAddPost = () => {
        if (newPost.trim()) {
            setPosts([...posts, newPost]);
            setNewPost("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("title", title);
        formData.append("backgroundColor", backgroundColor);
        formData.append("textColor", textColor);
        if (image) {
            formData.append("image", image);
        }
        formData.append("posts", JSON.stringify(posts));

        const response = await fetch("/api/savePageConfig", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Page configuration saved!");
        } else {
            alert("Error saving configuration.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Page Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                />
            </div>

            <div>
                <label>Background Color:</label>
                <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />


            </div>

            <div>
                <label>Text Color:</label>
                <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}

                />

            </div>

            <div>
                <label>Upload background Image:</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>

            <div>
                <label>Add Post:</label>
                <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <button type="button" onClick={handleAddPost}>
                    Adicionar Post

                </button>
            </div>

            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}

            </ul>
            <button type="submit">Save Configuration</button>

        </form>



    );
};
export default PageConfigForm;