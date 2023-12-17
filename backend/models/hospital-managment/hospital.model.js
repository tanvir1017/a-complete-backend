import mongoose from "mongoose";

const hospitalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalRecordSchema);
