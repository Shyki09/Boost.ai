export default async function handler(req, res) {
  try {
    await connectMongo();
  } catch (error) {
    return res.status(500).json({ error: "Connection Failed!" });
  }

  if (req.method === "POST") {
    if (!req.body)
      return res.status(400).json({ error: "Request body is missing!" });
    const { Username, email, password } = req.body;

    const checkexisting = await Users.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: "User Already Exists" });

    try {
      const hashedPassword = await hash(password, 12);
      const newUser = await Users.create({
        Username,
        email,
        password: hashedPassword,
      });
      return res.status(201).json({ status: true, user: newUser });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to create user", details: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
