import React from 'react'
import '../scss/tecnologies.scss'

const imagen= [
    {title: "REACT JS", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"},
    {title: "REACT NATIVE", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"},
    {title: "MONGO DB", image:"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"},
    {title: "POSTGRESQL", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png"},
    {title: "GRAPHQL", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png"},
    {title: "NODE JS", image:"https://mercedesdavila.github.io/img/nodejs.png"},
    {title: "SASS", image:"https://camo.githubusercontent.com/c38bf4a44750bd9b576a2259a5074dd277d63f0a412b5b1f31f54e516711ef5b/687474703a2f2f736173732d6c616e672e636f6d2f6173736574732f696d672f7374796c6567756964652f7365616c2d636f6c6f722d61656630333534632e706e67"},
    {title: "JAVASCRIPT", image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEX////pyjL/3iUAAAD/4SPoyTLpyC///vrw0S7oxyTw3YvqzUf/3Rr/5GX/2wD/8bT29vYeHh4kJCTCwsJ6enozMzOPj4//5WuXl5foxhbowwD9+uz26bj/2ADoxyHtzjBFRUX42Sj9+ejw2oL68tT58Mvu1m/58Mzt0V7y4Jj156705KT79dzy4JX01Szu1W3v2Xrr0FX576n1/vUUFBTd3d09PT1MTEzry0L367//4lH/8r7t8bz17qP+6YT13Tfy9cv86ovv7qXx+drz4FT965Tz3S/s/vHx//zw42v08bbw5oCC8d7dAAALIUlEQVR4nO2dfVvaSBeHIwViIGK326d2AsTlzSqgKHZ3AYvKqtutfv/v82QSEGYyCZmZc0Jsc//V66pgbhMmP86cmRgGPh+/fqC8+9379+/vPkTx218pHAsOH98FBIbR/G/XB6pMbpgbZp/cMDfMPiLDj+Efe/8+9SODIqHhG+bXNPzj86cQn3d9oMokHWk+7PpAlfk1x9Lc8G2RG/5chn9++hzi009lKOJ9bph5fkrDv0QjyU810vyRG+aGmSc3zA2zz99ffwuxNAz/x5Kvb2pm5r2I6P/Z/IGcnJycnJycnJycXxMz42gLTkk5y5CBtmGX7GUZ0tA2bDu7loiFTLUN69k+h85Q29As71oiFlLXN5zsWiIWoj+WGleZPoklAMMTa9cWcVQBDDtZNrRO9QWNirtrjRisSwDDQZYN3QqA4TTLN0T3HMCwl2VD0gcwHMLGtpIurKF+aPOCKeg5LO0XC1q0GEXSBTCsg97xtQ0vWMM2gKFZijraDBi6EIawsU3bcJ8xLOsHb49TyFCja1g8Zt5uAhDagIMprOHxFYQgbDDVNmTeDSSWGsYZZGzTNmQ+hiCx1DD6WTIssIYdEEPQ2AZr6OrXEimg9URdQy7SQMRSL5hm2PALiGE7S59DhFjqxbYs3S0QYqkHZDDVNCyyoc0CCW2GUQUMprqGbGgrg4Q2L5hm1nACIwgaTHUN2XeDiaWGUVExLBMea8PQrkkTKLK/AyaWKtYTJ9MGy3RkvRras5tDSca2fw4xYqliPbEaepvKhuGB9EF0g5PIGkLUEik9lWobtOFUYAgU2rw/XxYMv/mGbKRxIGqJlHoWDOciQ5hY6sW2LBje0pGmyIY2gCnuJVkYaQJDNrQ5QKHNMFTuh9CGByJDCDkflYoptOGjb3jMjqUQcj4qwRTY0LwTxNISiJ1/bAqhBtrQRoylavVEYMO2KNKcgNhR+gqDKbDhQzNsCDIBHNDYveG9KLTB1BIpKrEN2PBQEGkA+hJXqEx0AxuKQhvIFHeASmwDNlzUBKENppZIMXf/OXwRxVKgWiJFoZ4oa3gQX8MIbodsaIPoS1xRxTc8shPUoVhDF9BQYaIbxRCnlki5zIgh8xvKcKHNMM7lYxu+IWBoM4yB/GCKYYgyARygEEzxDd0zQEOFiW4MwxZWLFWaBk7BEC6WKi0rwTC8wJjiXhpmYyzFmQD2UVg4g2HIhTawWiI1lI9tGIbHKFPcAfKxDcGQr7QBxlKVaWAMQ+YXgIY2lf5EdENrBGooH0wxPoc4E8AB8hPd+IYQy2XWyE90oxuCxlKV/kQEQ5S+xBXywRTfEK6WSJHvT0Qw5EIbXC2RIr9wBt8QbIrbR37hDLwhF2ksyOBtKEwDoxvChradGtp2UzQ9CrNcZo10MAUwtO1as1mzHxc3M7+mz654go2lChVTHUPbc6vZrdnR+Obhmv6nwBBoucwa6dimZuh3ZRZmR4tv3fb6KjRbvjhmLFWYBpafmfGuyNbRYtxrh77ZXosMYWOpQj1R1nA+//YQNXZ89w1RQ5vCRDfk/GEXd4o7QDqYQhr2fENuehSylkiRrphCGj77U9z7WFPcS7DH0jjGgSHz/qDVUh/sTBPHwg6HNtBqqY/sVkOQhi8CQwtK7BXZ/kRIw6C3lH1/uL7EFbKxDdJQFEvD76+LbGwDNPzP755lIw3Ycpk1stPAgIZ1WxDaIKe4A2SDKaBhWxBpgGuJFNmFM4CGwzRCm3x/IqDhvSi0wdYSKbILZwAND0V9idCx1GN3hv+IYil4aJMOpoqG1+3enD/4oLeUnQB2gOtQFMnYJm14PbyZ385atVqTNwwKHFwshReUjW0ShvWHw8XjXYF2kVKXGp+pfwhCG3wsla4nJjE02/fjxaxIS4YblbY7/gIMqjTb3l4fyWngLYb1m/nRo3dFMm5BKXHGvc4sCCIN7BR3gGR/YqyhXzUMuS0Nf/CG6YQ26WAabxiDfcu9ThTaCHxokw6myoa1J+51X0SGkH2JKyQnutUNv3Gvu/eXPF1gx1Lpjb3VDXvc6w4FsRR4ijtAsp6obsjP7Z77hlxog50ADjAB7xZx2HykeRIZIsRS2Y29lQ0L4kjDhjbIxSRr5KaBVQ3t2X/c60QrgKG23mGRi23qhvzr/vUNt707BHL9icqGR/zrBKtHESpt/hFyQw2x4i5bZUP+hm+K1jhDTwAHcBVTMu1UlxsHQRrW5tzLvvs3fK7ShhFLQ7GNbkrRbpyUCBGeSmXDe+5lDyJDjFjq5cOwoYc5HJwSJ3wqlQ35EtONqFqKEUtD08AbG4uY04rlcKdS1bDJp5XntEJbaGNvbuuUdmNUJq6lbVjgb4f+5CFuX+KKuhVnSOmenVrE1TG0azb/soVg2xb4CWAfrj9RvP1NvdepOnSEVTC0m7XZU+jsCEMbkiG7f2L0Bj/t/glxwot0Yw3tWrN1ey96y5mg0gazjXcYduFM/BZG3fBoF2lIO/QOxlGnxf8R5L7EFSMJQwFiQ++Td/d0H3PEwY/h9iWu6EAb2rXa3dFz/Gfqu8AQvC9xBbsRj66hN64czLtbL7ch7tY7LH04Q7v5723cpblG1NMG3pe4gu1P1DG0Z9+TvirF0MbXE7UMk88fjkWhDaOWSBnuwnAuMkSYAPZpg30OJQxfRKENJ5by651TMjwQde1hVEt92D9kTzJYqBmKQhvsGudN2GBK9i4bMglYzfBOFEuRQpthXLG/aM8ipNqZJv2DqhgORRskI/QlrhD0J5a9L4TVs0SffFlD8+al1aylGUujK6au45xuv2ClDLvzWbO5niROo1pKiZnoLjvOpBJ/wSY2bD//KKxOXkArjWopZcs0sEvc0/PoLJ2sY+h+MVvuXRZtCLcjJM/2/kTLJaVRX3y72m74MD5oCRsYUgptSRfOWMQpd6bhUxlveH3z4n2fErdnFFOpJVKST3RbjuONsKxltKH58PQYZVcIhzaMvsQVUlP53qk86W+MsBGG7eejQpxeIdy1hxba5Df2ZiKBwPB6+iIYVwSGzLvCbeMdRmFjbxoJrgZdgeHDeGZHNUbFG6KFNqUdIn1oJJh2Ng1vXmpbLs1N2HfD6LxcofHEmXIwP/Xa15bYrhCKpWVEQ/0HBao9ZyatWArxfGclQy7SYHRerlDZ2BvcEORJ1VHoP8EawBClL3GF0hNntA350Aa9insT/SdYKxgW+UobXixVfOKMjmGxWGjt73FTs1i1RIrKxt7qhp7dxR73qPE9pL7EV7QfFJjUsFhsXRzzT1IPgNzGO4z2gwKTGC4vTaGeh4VqqP0E662G1C7i5C2B3MY7jMLG3hKG3smLujTXoIY2pY29kxrSk7fNjoIa2gCeYC00LHrjSswHjzPE6UtcoR1Mw4Yxo6YQgldLpAyrjqAPUdmQjpoydrTCNUGsQwX0OpOYxlkJw6QfvFc7QkqXgiolBu0+7UNUujUuDWlckTp5rmOdRlSakTC751cqp9IzTHRP2MQiTrXyBbHAFkm9cek6soPrfvJR08d1CFN1TZ3uIK6dXYDkJ29yhj6wbMecXk42u4NhsFwyGTV2cWmKGQ5Gr93BEHrEPT0bpjNsJqfeq0z4dnYVysQpJW8OSJt6f+RIjz3MyXOcq52OK0n4ci459rzaeeNKhV9AmlHajRPJsafskvJJI9U7ui7m8Ey4lCbi5F3FzP9nmPq0suds+zLi3dEvM3RTkGfYp+FOPMKWaRwbYNYGU8LsiZbx0Tv6Ze961wcHRvBtZH1pEms0eFPjShK8byP+eiHvju7dFN7yJy+O+rTj3RTStfs/0Hxhix/VGrUAAAAASUVORK5CYII="},
    
]

const Tecnologies = () => {
    return (
        <div className="tecnologies-principal">
            <h1>Tecnologías</h1>
            <div className="tecnologies-secondary">
                {imagen.map( (item, i) => {
                    return (
                        <div key={`imagen${i}`} className="tecnologies-container-imagen">
                            <img  className="tecnologies-imagen" src={item.image} alt={`img${i}`}/>
                            <span>{item.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tecnologies
