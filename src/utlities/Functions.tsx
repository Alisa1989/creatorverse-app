import { supabase } from "../client";

export async function deleteCreator(id: number) {
  const response = await supabase
  .from('creators')
  .delete()
  .eq('id', id)
  console.log("delete response", response)
}