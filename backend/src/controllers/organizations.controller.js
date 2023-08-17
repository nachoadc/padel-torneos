import { Organization } from "../models/Organization.js";

export const getOrganizations = (req, res) => {
    res.send('Getting organization');
}

export const createOrganization = async (req, res) => {
    const {nombre, descripcion, direccion, telefono, email} = req.body;
    
    const newOrganization = await Organization.create({
        nombre,
        descripcion,
        direccion,
        telefono,
        email
    });

    console.log(newOrganization);

    res.send('Creating organization');
}