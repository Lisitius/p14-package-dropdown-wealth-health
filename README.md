# Dropdown p14

Dropdown module for OpenClassrooms project 14 of Javascript React formation.

## Installation

To install the dropdown, you can use npm or yarn:

```
npm install p14-package-dropdown-wealth-health
```

or

```
yarn add p14-package-dropdown-wealth-health
```

## Usage

First, import the Dropdown component in your React file:

```
import { Dropdown } from "p14-package-dropdown-wealth-health";
```

Then, you can use the Dropdown component in your React component or application.

## Props

- **name** (string): The name of the dropdown, used for form submission and error handling.
- **value** (string): The current value selected in the dropdown. 
- **options** (array of objects): An array of option objects, each with a label (string) and a value (string).
- **onChange** (function): A function to handle changes in the dropdown's value. The function receives an event object with the selected option's value. 
- **defaultOption** (string): A default option to be displayed when no value is selected. 
- **formErrors** (object): An object containing any form validation errors, where the key is the name of the dropdown and the value is the error message. 

## Example

Below is an example of how to use the Dropdown component in a React application:

```
import React, { useState } from "react";
import { Dropdown } from "p14-package-dropdown-wealth-health";

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [errors, setErrors] = useState({});

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const validate = (value) => {
    let isValid = true;
    let errors = {};

    if (value === "") {
      errors.dropdownExample = "This field is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    validate(newValue);
  };

  const handleSubmit = () => {
    if (validate(selectedValue)) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <h1>Dropdown Example</h1>
      <Dropdown
        name="dropdownExample"
        value={selectedValue}
        options={options}
        onChange={handleChange}
        defaultOption="Select an option"
        formErrors={errors}
      />
      {errors.dropdownExample && (
        <p className="error">{errors.dropdownExample}</p>
      )}
      <button onClick={handleSubmit}>Submit</button>
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default App;
```

