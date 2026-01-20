import { koneksi } from '../config/db.js';

const getUser = async (req, res) => {
  const [data] = await koneksi.query("SELECT * FROM user");
  return res.status(200).json({ data });
};

const getId = async (req, res) => {
  const id = req.params.id;
  const [data] = await koneksi.query("SELECT * FROM user WHERE id_user=?", [id]);
  return res.status(200).json(data);
};

const deleteId = async (req, res) => {
  const id = req.params.id;
  const [data] = await koneksi.query("DELETE FROM user WHERE id_user=?", [id]);
  return res.status(200).json({ message: "Data berhasil dihapus", result: data });
};

const postId = async (req, res) => {
  const { username, email, status } = req.body;

  const [data] = await koneksi.query(
    "INSERT INTO user (username, email, status) VALUES (?, ?, ?)",
    [username, email, status]
  );

  const cekData = data.insertId;
  const [dataId] = await koneksi.query("SELECT * FROM user WHERE id_user=?", [cekData]);

  return res.status(200).json({ message: "Data berhasil ditambahkan", data: dataId[0] });
};

const patchId = async (req, res) => {
  const id = req.params.id;
  const { username, email, status } = req.body;

  await koneksi.query(
    "UPDATE user SET username=?, email=?, status=? WHERE id_user=?",
    [username, email, status, id]
  );

  const [updated] = await koneksi.query("SELECT * FROM user WHERE id_user=?", [id]);
    return res.status(200).json({ message: "Data berhasil diupdate", data: updated[0] });
};

export { getUser, getId, deleteId, postId, patchId };
