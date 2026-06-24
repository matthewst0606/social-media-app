/*
    --- settings.js ---
    Handles the settings page edit buttons.
    Each button opens a dropdown form for updating the profile photo,
    editing the bio, or deleting the account.
*/
class Settings {
    // Adds the click behavior that opens a settings form.
    editListener(button, dropdown, options) {
        button.addEventListener("click", (event) => {
            dropdown.classList.toggle("hidden");
            button.classList.toggle("active");

            // If this dropdown already has a form open,
            // remove it and close the action.
            let activeForm = dropdown.querySelector(".btn-edit-form");
            if (activeForm) {
                activeForm.remove();
                return;
            }

            // Creates the form that sends the selected setting change to PHP.
            let form = createElementWithClass("form", "btn-edit-form");
            form.method = "post";
            form.action = "../../app/settings/editSettings.php";

            // Builds the input using the options for this specific setting.
            let input = createElementWithClass("input", options.inputClass);
            input.type = options.type;
            input.name = options.name;

            // if placeholder exists (for editing bio form)
            if (options.placeholder) input.placeholder = options.placeholder;

            // if required exists (for preventing blank bio form)
            if (options.required) input.required = true;

            // if enctype exists (for editing pfp form)
            if (options.enctype) form.enctype = options.enctype;

            // form submit button
            let submitBtn = createElementWithClass("button", "save-btn");
            submitBtn.type = "submit";
            setText(submitBtn, options.submitText);


            form.append(input, submitBtn);
            dropdown.appendChild(form);
        });
    }

    // Creates the dropdowns for each settings button and connects their listeners.
    displaySettings() {
        // Gets the settings buttons that were loaded from settings.php.
        let settingsBtn = document.querySelectorAll(".settings-btn");


        // change profile photo
        let editPfp = settingsBtn[0];
        let pfpDropdown = createElementWithClass("div", "edit-dropdown", "hidden");
        let pfpOptions = {
            type: "file",
            name: "profilePhoto",
            inputClass: "pfp-edit-input",
            submitText: "save",
            enctype: "multipart/form-data"
        };
        editPfp.parentElement.appendChild(pfpDropdown);

        // change bio
        let editBio = settingsBtn[1];
        let bioDropdown = createElementWithClass("div", "edit-dropdown", "hidden");
        let bioOptions = {
            type: "text",
            name: "bio",
            placeholder: "new bio",
            inputClass: "bio-edit-input",
            submitText: "save",
            required: true
        };
        editBio.parentElement.appendChild(bioDropdown);


        // delete account
        let deleteAccount = settingsBtn[2];
        let deleteDropdown = createElementWithClass("div", "edit-dropdown", "hidden");
        let deleteOptions = {
            type: "hidden",
            name: "deleteAccount",
            inputClass: "bio-edit-input",
            submitText: "Delete Account?"
        };
        deleteAccount.parentElement.appendChild(deleteDropdown);


        // ----- call event listener -----
        this.editListener(editPfp, pfpDropdown, pfpOptions);
        this.editListener(editBio, bioDropdown, bioOptions);
        this.editListener(deleteAccount, deleteDropdown, deleteOptions);
    }
}
