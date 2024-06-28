'use server';

import { revalidatePath } from 'next/cache';
import { signOut, signIn, auth } from './auth';
import { createBooking, deleteBooking, updateGuest } from './data-service';
export async function createNewBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error('u must be logged in');
  const newBookingData = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations'),
    extraPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    status: 'unconfirmed',
  };
  await createBooking(newBookingData);

  revalidatePath('/cabins');
}
export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error('u must be logged in');
  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');
  const updateData = { nationality, countryFlag, nationalID };
  await updateGuest(session.user.guestId, updateData);
  revalidatePath('/account/profile');
}
export async function signInFunction() {
  await signIn('google', { redirectTo: '/account' });
}
export async function signOutFunction() {
  await signOut({ redirectTo: '/' });
}
export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error('u must be logged in');
  await deleteBooking(bookingId);
  revalidatePath('/account/reservations');
}
