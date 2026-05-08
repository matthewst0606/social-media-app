


class ProfilePost extends Post {
    // --------------  constructs a post  -------------- 
    displayProfilePost() {
        let postPreview = createElementWithClass("article", "postPreview");

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


    createProfileFigure() {
        let figure = createElementWithClass("figure", "figContainer");
        let img = createImage(this.photo, "post-photo", "mainPhoto");
        figure.append(img);
        return figure;
    }

    createDropdownButton() {
        let editBtn = createElementWithClass("button", "edit-post-btn");
        setText(editBtn, "edit");
        return editBtn;
    }



    createDropdown(dropdownButton) {
        let dropdown = createElementWithClass("div", "edit-dropdown", "hidden");
        return dropdown;
    }
    

    createDeleteButton() {
        let deletePost = createElementWithClass("button", "delete-post-btn");
        setText(deletePost, "delete post");
        return deletePost;
    }

    createDescriptionButton() {
        let editDescription = createElementWithClass("button", "edit-description-btn");
        setText(editDescription, "edit description");
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
        let form = createElementWithClass("form", options.formClass);
        form.method = "post";
        form.action = options.formAction;

        // get the users id 
        let idInput = this.postIdInput();

        // input for description
        let input = createElementWithClass("input", options.inputClass);
        input.type = options.inputType;
        input.name = options.inputName;
        input.placeholder = options.inputPlaceholder;

        // submit button
        let submitBtn = createElementWithClass("button", options.submitClass);
        submitBtn.type = options.submitType;
        setText(submitBtn, options.submitText);

        form.append(idInput, input, submitBtn);
        return form;
    }

}
