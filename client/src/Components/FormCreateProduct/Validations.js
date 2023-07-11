export function ValidateName(product) {
  if (!product || product.trim().length === 0) {
    return {
      isValidation: false,
      message: "Name is required",
    };
  } else if (product.trim().length > 100) {
    return {
      isValidation: false,
      message: "Name cannot be longer than 100 characters",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * SLUG * ================== */
export function ValidateSlug(product) {
  if (!product || product.trim().length === 0) {
    return {
      isValidation: false,
      message: "Slug is required",
    };
  } else if (product.trim().length > 100) {
    return {
      isValidation: false,
      message: "Slug cannot be longer than 100 characters",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * PRICE * ================== */
export function ValidatePrice(product) {
  if (product <= 0) {
    return {
      isValidation: false,
      message: "Price cannot be negative",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * CATEGORY * ================== */

export function ValidateCategory(product) {
  if (!product || product.trim().length === 0) {
    return {
      isValidation: false,
      message: "Category is required",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * BRAND * ================== */
export function ValidateBrand(product) {
  if (!product || product.trim().length === 0) {
    return {
      isValidation: false,
      message: "Brand is required",
    };
  } else if (product.trim().length > 100) {
    return {
      isValidation: false,
      message: "Brand cannot be longer than 100 characters",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}

/* ================== * STOCK * ================== */
export function ValidateStock(product) {
  if (product <= 0) {
    return {
      isValidation: false,
      message: "Stock cannot be 0 or negative",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}
/* ================== * DESCRIPTION * ================== */
export function ValidateDescription(product) {
  if (!product || product.trim().length === 0) {
    return {
      isValidation: false,
      message: "Description is required",
    };
  } else if (product.trim().length > 1000) {
    return {
      isValidation: false,
      message: "Description cannot be longer than 1000 characters",
    };
  } else {
    console.log("ok");
    return {
      isValidation: true,
      message: "",
    };
  }
}
