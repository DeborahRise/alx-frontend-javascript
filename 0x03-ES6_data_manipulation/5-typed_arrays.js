export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position >= 0 && position < length) {
    const dataview = new DataView(buffer);
    dataview.setInt8(position, value);
    return dataview;
  }
  throw new Error('Position outside range');
}
