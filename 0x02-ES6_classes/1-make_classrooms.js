import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const maxStudentSizes = [19, 20, 34];

  return maxStudentSizes.map((maxStudentSize) => new ClassRoom(maxStudentSize));
}
