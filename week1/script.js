/* ======== DATA (English labels + your exact numbers) ======== */
const factors = [
  "Top Management Support",
  "Clear Business Objectives",
  "Data Quality & Integration",
  "Organizational Culture",
  "IT Infrastructure & Scalability",
  "Cross-Department Collaboration",
  "Vendor Selection & Compatibility",
  "Regulatory & Compliance",
  "Change Management Process",
  "Employee Training & Competency",
  "Organizational Readiness",
  "Strategic Alignment"
];

// Direct relation matrix X (12×12)
const X = [
 [0,3.5,2,3,2.625,2,2.25,1.625,2,2.75,3.125,3],
 [3,0,2.375,2.5,2.25,2.75,2.375,1.875,2.375,2.625,2.5,3],
 [2,2.375,0,2.375,2.5,2.375,2.375,1.875,2.25,2.75,2.375,2],
 [2.75,2.5,1.625,0,1.875,2.875,2.125,1.5,2.375,3.125,2.875,2.5],
 [2.25,1.875,3,1.625,0,1.5,2.375,1.75,2.25,2,2,2],
 [2,2.625,1.875,3,1.875,0,1.625,1.125,2.375,2,2,2.5],
 [2.125,1.625,2.375,1.625,2.75,1.25,0,1.625,1.5,2,1.375,1.5],
 [1.75,2,2.25,1.625,2.125,1.625,1.875,0,1.875,1.875,1.625,1.75],
 [2.375,2.625,2.375,2.625,2.375,2.25,2.125,1.75,0,2.75,2.25,2.375],
 [2.125,2.625,2,2.25,1.75,2.125,2,1.25,2.375,0,2.875,2.125],
 [3.25,2.875,2.25,2.125,2,2,1.625,1.625,2.75,2.75,0,3.25],
 [3.25,3,2.25,2.125,2.375,2,1.625,1.625,2.5,2.5,2.875,0]
];

// Normalized matrix N (12×12)
const N = [
 [0.000,0.112,0.074,0.102,0.084,0.074,0.079,0.065,0.088,0.079,0.121,0.121],
 [0.127,0.000,0.086,0.090,0.068,0.095,0.059,0.072,0.095,0.095,0.104,0.109],
 [0.082,0.097,0.000,0.067,0.123,0.077,0.097,0.092,0.097,0.082,0.092,0.092],
 [0.121,0.101,0.095,0.000,0.065,0.121,0.065,0.065,0.106,0.090,0.085,0.085],
 [0.107,0.092,0.102,0.077,0.000,0.077,0.112,0.087,0.097,0.071,0.082,0.097],
 [0.088,0.121,0.104,0.126,0.066,0.000,0.055,0.071,0.099,0.093,0.088,0.088],
 [0.101,0.106,0.106,0.095,0.106,0.073,0.000,0.084,0.095,0.089,0.073,0.073],
 [0.092,0.106,0.106,0.085,0.099,0.064,0.092,0.000,0.099,0.071,0.092,0.092],
 [0.081,0.096,0.091,0.096,0.091,0.096,0.061,0.076,0.000,0.096,0.112,0.102],
 [0.101,0.097,0.101,0.115,0.074,0.074,0.074,0.069,0.101,0.000,0.101,0.092],
 [0.121,0.097,0.092,0.111,0.077,0.077,0.053,0.063,0.087,0.111,0.000,0.111],
 [0.115,0.115,0.077,0.096,0.077,0.096,0.058,0.067,0.091,0.082,0.125,0.000]
];

// Total relation matrix T (12×12)
const T = [
 [0.208,0.318,0.273,0.304,0.271,0.264,0.249,0.236,0.288,0.272,0.323,0.320],
 [0.328,0.204,0.280,0.291,0.255,0.280,0.229,0.240,0.292,0.284,0.306,0.306],
 [0.287,0.302,0.196,0.268,0.309,0.262,0.268,0.261,0.295,0.272,0.294,0.291],
 [0.319,0.305,0.289,0.200,0.251,0.303,0.234,0.233,0.301,0.279,0.288,0.284],
 [0.308,0.297,0.296,0.275,0.187,0.261,0.280,0.255,0.293,0.261,0.284,0.294],
 [0.291,0.323,0.298,0.322,0.252,0.187,0.225,0.239,0.296,0.282,0.290,0.287],
 [0.301,0.309,0.300,0.291,0.291,0.258,0.171,0.251,0.291,0.276,0.275,0.272],
 [0.295,0.309,0.300,0.282,0.285,0.250,0.261,0.168,0.295,0.260,0.294,0.290],
 [0.287,0.301,0.287,0.296,0.277,0.282,0.231,0.244,0.198,0.285,0.312,0.299],
 [0.303,0.300,0.294,0.311,0.260,0.261,0.242,0.236,0.297,0.188,0.302,0.290],
 [0.321,0.300,0.284,0.307,0.262,0.264,0.223,0.229,0.283,0.296,0.202,0.307],
 [0.317,0.317,0.271,0.295,0.261,0.281,0.226,0.233,0.287,0.271,0.324,0.199]
];

// DEMATEL indices: [Factor, D, R, D+R, D−R]
const metrics = [
  ["Top Management Support", 3.324, 3.565, 6.890, -0.241],
  ["Clear Business Objectives", 3.295, 3.586, 6.881, -0.291],
  ["Data Quality & Integration", 3.304, 3.368, 6.672, -0.063],
  ["Organizational Culture", 3.287, 3.443, 6.729, -0.156],
  ["IT Infrastructure & Scalability", 3.291, 3.163, 6.454, 0.128],
  ["Cross-Department Collaboration", 3.292, 3.152, 6.444, 0.140],
  ["Vendor Selection & Compatibility", 3.285, 2.837, 6.122, 0.448],
  ["Regulatory & Compliance", 3.291, 2.825, 6.116, 0.465],
  ["Change Management Process", 3.299, 3.418, 6.717, -0.119],
  ["Employee Training & Competency", 3.286, 3.565, 6.851, -0.279],
  ["Organizational Readiness", 3.280, 3.494, 6.774, -0.215],
  ["Strategic Alignment", 3.283, 3.439, 6.722, -0.156]
];

/* ======== PLOTTING HELPERS ======== */
const heatmapLayout = (title) => ({
  margin:{l:170,r:10,t:10,b:150},
  xaxis:{tickangle:45, automargin:true},
  yaxis:{automargin:true},
  paper_bgcolor:'rgba(0,0,0,0)',
  plot_bgcolor:'rgba(0,0,0,0)',
});

function heatmap(containerId, matrix){
  const data = [{
    z: matrix,
    x: factors,
    y: factors,
    type: 'heatmap',
    hoverongaps: false,
    zsmooth: 'best',
    colorscale: 'Viridis',
    colorbar:{title:'Influence'}
  }];
  Plotly.newPlot(containerId, data, heatmapLayout(), {displayModeBar:false, responsive:true});
}

function causalScatter(containerId){
  const labels = metrics.map(m=>m[0]);
  const prominence = metrics.map(m=>m[2]);
  const net = metrics.map(m=>m[3]);
  const sizes = net.map(v=> 18 + Math.abs(v)*60);
  const colors = net.map(v=> v>=0 ? '#1f8a53' : '#a22e3a'); // drivers vs outcomes

  const data = [{
    x: net,
    y: prominence,
    mode:'markers+text',
    text: labels,
    textposition:'top center',
    marker:{size:sizes, color:colors, line:{width:1, color:'#e8eef6'}},
    hovertemplate:"<b>%{text}</b><br>D+R (prominence): %{y:.3f}<br>D−R (net): %{x:.3f}<extra></extra>"
  }];

  const layout = {
    margin:{l:70,r:20,t:10,b:70},
    xaxis:{zeroline:true, zerolinewidth:2, zerolinecolor:'#8a94a0', title:'D − R (driver ↔ outcome)'},
    yaxis:{title:'D + R (prominence)'},
    shapes:[
      {type:'line', x0:0,x1:0,y0:Math.min(...prominence)-0.1,y1:Math.max(...prominence)+0.1,
       line:{dash:'dot',width:1,color:'#8a94a0'}}
    ],
    paper_bgcolor:'rgba(0,0,0,0)',
    plot_bgcolor:'rgba(0,0,0,0)'
  };
  Plotly.newPlot(containerId, data, layout, {displayModeBar:false, responsive:true});
}

function renderTable(containerId){
  const headers = ["Factor","D (given)","R (received)","D+R (prominence)","D−R (net)","Role"];
  const rows = metrics.map(m=>{
    const role = m[3] > 0 ? "Driver" : (m[3] < 0 ? "Outcome" : "Neutral");
    return [...m, role];
  });

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const hrow = document.createElement('tr');
  headers.forEach(h=>{const th=document.createElement('th'); th.textContent=h; hrow.appendChild(th);});
  thead.appendChild(hrow);
  const tbody = document.createElement('tbody');
  rows.forEach(r=>{
    const tr=document.createElement('tr');
    r.forEach((c,i)=>{
      const td=document.createElement('td');
      td.textContent = (i===0) ? c : Number(c).toFixed ? Number(c).toFixed(3) : c;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(thead); table.appendChild(tbody);
  document.getElementById(containerId).appendChild(table);

  // CSV export
  document.getElementById('download_csv').addEventListener('click', ()=>{
    const csv = [headers.join(','), ...rows.map(r=>[r[0],r[1],r[2],r[3],r[4],r[5]].join(','))].join('\n');
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'dematel_metrics.csv';
    a.click();
  });
}

/* ======== RENDER ======== */
window.addEventListener('DOMContentLoaded', ()=>{
  heatmap('heatmap_direct', X);
  heatmap('heatmap_norm', N);
  heatmap('heatmap_total', T);
  causalScatter('scatter_causal');
  renderTable('table_metrics');

  // PNG download for each plot
  document.querySelectorAll('.btn[data-target]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-target');
      Plotly.toImage(id, {format:'png', height:760, width:1140}).then(url=>{
        const a = document.createElement('a');
        a.href = url; a.download = id + '.png'; a.click();
      });
    });
  });
});
