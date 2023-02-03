import { supabaseClient } from '@/lib/supabase'

export interface ISkill {
  id: string
  name: string
  image_path: string
  is_tool: boolean
}

export async function getSkills() {
  const { data, error } = await supabaseClient.from('skills').select('*')

  if (error) throw new Error('Failed to fetch skills')

  const skills: ISkill[] = data

  return skills
}
