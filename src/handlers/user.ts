

import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);

    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    });

    const token = createJWT(user)

    res.json({ message: "User created successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};


//sign in 


export const signin = async (req,res) => {
  const user = await prisma.user.findUnique({
    where :{
        username:req.body.username
    }
  })

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "nope" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
}