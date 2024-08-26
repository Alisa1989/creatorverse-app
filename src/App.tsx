import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar.tsx';
import ShowCreators from './pages/ShowCreators.tsx';
import AddCreator from './pages/AddCreator.tsx';
import ViewCreator from './pages/ViewCreator.tsx';
import EditCreator from './pages/EditCreator.tsx';
import { supabase } from "./client.ts";
import { useEffect, useState } from "react";


export type CreatorModel = {
  name: string,
  image_url: string,
  description: string,
  youtube_url?: string,
  twitter_url?: string,
  instagram_url?: string,
  id?: string
}

export interface CardProps {
  creator: CreatorModel
}

function App() {

    const [creators, setCreators] = useState<Array<CreatorModel>>([])

    useEffect(() => {
        getCreators();
    }, [])

    async function getCreators() {
        const { data, error} = await supabase
        .from('creators')
        .select()
        setCreators(data);
        console.log(data![0], error, typeof(data));
    }

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<ShowCreators creators={creators}/>} /> */}
          <Route path="/" element={<ShowCreators creators={creators}/>} />
          <Route path="/new" element={<AddCreator refresh={getCreators}/>} />
          <Route path="/:id" element={<ViewCreator creators={creators} refresh={getCreators}/>} />
          <Route path="/edit/:id" element={<EditCreator creators={creators}refresh={getCreators} />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App