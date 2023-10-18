import { Components } from '@/src/generated/api'

// this line breaks the build in next
// if you comment it out, the build works
import X = Components.Schemas.MeUserDto

export default function(){
  return <h1>foo</h1>
}
