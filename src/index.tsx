import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom'
import {router} from "./route";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider
        router={router}
    />
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={<AdminLayout/>}>
    //                 <Route index element={<Home/>}/>
    //                 <Route path="/testimony" element={<Testimony/>}/>
    //                 <Route path="/journal" element={<Journal/>}/>
    //                 <Route path="/audio" element={<Audio/>}/>
    //                 <Route path="/video" element={<Video/>}/>
    //                 <Route path="/stream" element={<Stream/>}/>
    //                 <Route path="/worship" element={<Worship/>}/>
    //                 <Route path="/users" element={<User/>}/>
    //             </Route>
    //         </Routes>
    //     </BrowserRouter>
    // </React.StrictMode>
);
reportWebVitals();
