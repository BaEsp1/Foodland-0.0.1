/* ================== * NAME * ================== */
export function ValidateName(user) {
  const regex = /^[a-zA-Z ]{1,60}$/; // accepts letters and spaces only, maximum 60 characters
  if (!user || user.trim().length === 0) {
    return {
      isValidation: false,
      message: "Name is required",
    };
  } else if (!regex.test(user)) {
    return {
      isValidation: false,
      message: "Name cannot have special characters or numbers",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * LAST NAME * ================== */
export function ValidateLastName(user) {
  const regex = /^[a-zA-Z ]{1,60}$/; // accepts letters and spaces only, maximum 60 characters
  if (!user || user.trim().length === 0) {
    return {
      isValidation: false,
      message: "Last name is required",
    };
  } else if (!regex.test(user)) {
    return {
      isValidation: false,
      message: "Last name cannot have special characters or numbers",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * PHONE * ================== */
export function ValidatePhone(user) {
  const regex = /^[0-9]{10}$/; // accepts exactly 10 digits only
  if (!user || user.trim().length === 0) {
    return {
      isValidation: false,
      message: "Phone number is required",
    };
  } else if (!regex.test(user)) {
    return {
      isValidation: false,
      message: "Phone number must be a 10-digit number",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * EMAIL * ================== */

export function ValidateEmail(user) {
  const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/; // accepts valid email formats
  if (!user || user.trim().length === 0) {
    return {
      isValidation: false,
      message: "Email is required",
    };
  } else if (!regex.test(user)) {
    return {
      isValidation: false,
      message: "Invalid email format",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * PASSWORD * ================== */
export function ValidatePassword(password) {
  const regex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])[a-zA-Z\d]{6,10}$/; // accepts passwords with at least one number, one uppercase letter, one lowercase letter, and at least 6 characters
  if (!password || password.trim().length === 0) {
    return {
      isValidation: false,
      message: "Password is required",
    };
  } else if (!regex.test(password)) {
    return {
      isValidation: false,
      message:
        "Password must have at least one number, one uppercase letter, one lowercase letter, and at least 6 characters",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}
