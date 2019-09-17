import React from 'react';
import './index.css'

const Context: React.FC = () => {
  return (
    <main className="context">
      <h2 style={{ color: '#f4f4f4' }}>我</h2>
      <div>
        <img className="image" alt="" src="http://tonghuashuo.github.io/static/brain-7dc10532e2058d66744cd1398811518d.png" />
      </div>
      <br />
      <br />
      <div>
        <p>
          TigerZH,花名「温城」
            </p>
        <p>
          前端工程师
            </p>
        <p>目前在年月中沉淀，修福报。祈福...</p>
        <p>希望能成为「做好一件有细节事情的工程师」</p>
      </div>
    </main>
  );
}

export default Context;
