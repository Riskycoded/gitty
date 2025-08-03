import React from 'react'

export const Table = () => {
  return (
    <div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Chart</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><span><img src="header.jpg" alt="" className="inline w-6 h-6 mr-2" /> Bitcoin</span></td>
            <td>$39,019.24</td>
            <td>-0.98%</td>
            <td></td>
            <td><button>Buy</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td><span><img src="header.jpg" alt="" className="inline w-6 h-6 mr-2" /> Ethereum</span></td>
            <td>$2,867.08</td>
            <td>-4.17%</td>
            <td></td>
            <td><button>Buy</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td><span><img src="header.jpg" alt="" className="inline w-6 h-6 mr-2" /> Bitcoin Cash</span></td>
            <td>$554.74</td>
            <td>-2.53%</td>
            <td></td>
            <td><button>Buy</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
