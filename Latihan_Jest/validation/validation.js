const nameValidation = (name) => {
    name = name.trim();

    if (name.length <= 3) {
        return { error: true, message: "Nama harus lebih dari 3" };
    }

    if (!isNaN(parseInt(name))) {
        return { error: true, message: "Nama tidak boleh diisi dengan angka" };
    }

    if (name.length > 20) {
        return { error: true, message: "Nama tidak boleh diisi lebih dari 20" };
    }

    return { error: false, message: "Confirm", data: name };
};

const ageValid = (age) => {
    if (age <= 12) {
        return { error: true, message: "Underage" };
    }

    if (age >= 90) {
        return { error: true, message: "Moreage" };
    }

    if ((age = true)) {
        return { error: false, message: "Confirm", data: 16 };
    }
};

module.exports = { nameValidation, ageValid };
