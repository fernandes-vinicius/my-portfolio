import { supabaseClient } from '@/lib/supabase'

export interface IProject {
  id: string
  name: string
  description: string
  image_path: string
  code_url: string
  demo_url?: string | null
}

export async function getProjects() {
  const { data, error } = await supabaseClient.from('projects').select('*')

  if (error) throw new Error('Failed to fetch projects')

  const projects: IProject[] = data

  return projects
}
