


class ProfilePost extends Post {
    // --------------  constructs a post  -------------- 
    displayProfilePost() {
        let postPreview = this.createProfileArticle();
        let postImage = this.createProfileFigure();
        let dropdownButton = this.createDropdownButton();
        let dropdown = this.createDropdown(dropdownButton);
        postPreview.append(postImage, dropdownButton, dropdown);


        this.editBtnListener(dropdownButton, dropdown);

        let editDescriptionBtn = this.createDescriptionButton();
        let descriptionOptions = this.createDescriptionOptions();
        let deletePostBtn = this.createDeleteButton();
    
        this.deletePostListener(deletePostBtn);
        this.editDescriptionListener(editDescriptionBtn, dropdown, deletePostBtn, descriptionOptions);

        dropdown.append(editDescriptionBtn, deletePostBtn);
        return postPreview;
    }    

    // ------------------------  listeners  ------------------------ 
    editBtnListener(editBtn, dropdown) {
        editBtn.addEventListener("click", function () {
            dropdown.classList.toggle("hidden");
            editBtn.classList.toggle("active");
        });
    }

    deletePostListener(deletePost) {
        deletePost.addEventListener("click", () => {
            let form = document.createElement("form");
            let input = this.postIdInput();

            form.method = "post";
            form.action = "../../app/posts/delete.php";


            form.appendChild(input);
            document.body.appendChild(form);
            form.submit();
        });
    }

    editDescriptionListener(editDescription, dropdown, deletePost, options) {
        editDescription.addEventListener("click", () => {
            // check for existing form 
            let existingForm = dropdown.querySelector(".description-edit-form");
            if (existingForm) {
                existingForm.remove();
                return;
            }

            let form = this.createDescriptionForm(options);
            dropdown.insertBefore(form, deletePost);

            let input = form.querySelector(".description-edit-input");
            input.focus();
        });
    }





    // ------------------------  helpers  ------------------------ 
    postIdInput() {        
        let input = document.createElement("input");
        input.type = "hidden";
        input.name = "post_id";
        input.value = this.postId;  
        return input;      
    }

    createProfileArticle() {
        let article = document.createElement("article");
        article.classList.add("postPreview");
        return article;
    }

    createProfileFigure() {
        let figure = document.createElement("figure");
        figure.classList.add("figContainer");

        let img = this.displayPhoto();
        figure.append(img);

        return figure;
    }

    createDropdownButton() {
        let editBtn = document.createElement("button");
        editBtn.textContent = "edit post";
        editBtn.classList.add("edit-post-btn");
        return editBtn;
    }



    createDropdown(dropdownButton) {
        let dropdown = document.createElement("div");
        dropdown.classList.add("edit-dropdown", "hidden");

        return dropdown;
    }
    

    createDeleteButton() {
        // deletepost option 
        let deletePost = document.createElement("button");

        deletePost.textContent = "delete post";
        deletePost.classList.add("delete-post-btn");
        return deletePost;
    }

    createDescriptionButton() {
        let editDescription = document.createElement("button");
        editDescription.textContent =  "edit description";
        editDescription.classList.add("edit-description-btn");
        return editDescription;
    }

    createDescriptionOptions() {
        return {
            formClass: "description-edit-form",
            formAction: "../../app/posts/editdescription.php",
            inputType: "text",
            inputName: "description",
            inputPlaceholder: "New Description",
            inputClass: "description-edit-input",
            submitText: "Save",
            submitType: "submit",
            submitClass: "save-btn"
        };
    }


    createDescriptionForm(options) {
        let form = document.createElement("form");
        form.classList.add(options.formClass);
        form.method = "post";
        form.action = options.formAction;

        // get the users id 
        let idInput = this.postIdInput();

        // input for description
        let input = document.createElement("input");
        input.type = options.inputType;
        input.name = options.inputName;
        input.placeholder = options.inputPlaceholder;
        input.classList.add(options.inputClass);

        // submit button
        let submitBtn = document.createElement("button");
        submitBtn.type = options.submitType;
        submitBtn.textContent = options.submitText;
        submitBtn.classList.add(options.submitClass);

        form.append(idInput, input, submitBtn);
        return form;
    }

}



