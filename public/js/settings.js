class Settings {

    editListener(button, dropdown, options) {
        button.addEventListener("click", (event) => {
            dropdown.classList.toggle("hidden");
            button.classList.toggle("active");

            // ------ removes the old active form ------
            let activeForm = dropdown.querySelector(".btn-edit-form");
            if (activeForm) {
                activeForm.remove();
                return;
            }

            // ------ form ------
            let form = document.createElement("form");
            form.classList.add("btn-edit-form");
            form.method = "post";
            form.action = "../../app/settings/editSettings.php";

            // ----- input ------
            let input = document.createElement("input");
            input.type = options.type;
            input.name = options.name;
            input.classList.add(options.inputClass);

            // if placeholder exists (for editing bio form)
            if (options.placeholder) input.placeholder = options.placeholder;

            // if enctype exists (for editing pfp form)
            if (options.enctype) form.enctype = options.enctype;
            
            // form submit button
            let submitBtn = document.createElement("button");
            submitBtn.type = "submit";
            submitBtn.textContent = options.submitText;
            submitBtn.classList.add("save-btn");


            form.append(input, submitBtn);
            dropdown.appendChild(form);
        });
    }

    displaySettings() {
        // get settings buttons from settings.php
        let settingsBtn = document.querySelectorAll(".settings-btn");


        // -----change profile photo----- 
        let editPfp = settingsBtn[0];
        let pfpDropdown = document.createElement("div");
        let pfpOptions = {
            type: "file",
            name: "profilePhoto",
            inputClass: "pfp-edit-input",
            submitText: "save",
            enctype: "multipart/form-data"
        };

        pfpDropdown.classList.add("edit-dropdown", "hidden");
        editPfp.parentElement.appendChild(pfpDropdown);

        // ----- change bio-----
        let editBio = settingsBtn[1];
        let bioDropdown = document.createElement("div");
        let bioOptions = {
            type: "text",
            name: "bio",
            placeholder: "new bio",
            inputClass: "bio-edit-input",
            submitText: "save"
        };

        bioDropdown.classList.add("edit-dropdown", "hidden");
        editBio.parentElement.appendChild(bioDropdown);


        // -----delete account-----
        let deleteAccount = settingsBtn[2];
        let deleteDropdown = document.createElement("div");
        let deleteOptions = {
            type: "hidden",
            name: "deleteAccount",
            inputClass: "bio-edit-input",
            submitText: "Delete Account?"
        };
        
        deleteDropdown.classList.add("edit-dropdown", "hidden");
        deleteAccount.parentElement.appendChild(deleteDropdown);

        // ----- call event listener -----
        this.editListener(editPfp, pfpDropdown, pfpOptions);
        this.editListener(editBio, bioDropdown, bioOptions);
        this.editListener(deleteAccount, deleteDropdown, deleteOptions);
    }
}
