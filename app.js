// Initialize Appwrite
const client = new Appwrite.Client();
const databases = new Appwrite.Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6953ef87002be7db315c"); // Project ID

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameValue = document.getElementById("name").value.trim();
  const phoneValue = document.getElementById("phone").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();

  try {
    await databases.createDocument(
      "6953f0cd0017e79b1658", // Database ID
      "messages",            // Table ID
      Appwrite.ID.unique(),
      {
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        message: messageValue
      }
    );

    alert("Message submitted successfully!");
    form.reset();

  } catch (error) {
    console.error("Appwrite error:", error);
    alert(error.message || "Submission failed");
  }
});
