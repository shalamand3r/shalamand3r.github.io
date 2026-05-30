const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas.getContext('2d');
const jsonEditor = document.getElementById('json-editor');
const btnApply = document.getElementById('btn-apply');
const themeToggle = document.getElementById('theme-toggle');

const tabGui = document.getElementById('tab-gui');
const tabCode = document.getElementById('tab-code');
const guiContainer = document.getElementById('gui-container');
const codeContainer = document.getElementById('code-container');
const guiEditor = document.getElementById('gui-editor');
const btnAddLayer = document.getElementById('btn-add-layer');

const presets = {
    jello: {
        "name": "Jello",
        "layers": [
            {
                "system": "cartesian",
                "originX": 0.5,
                "originY": 0.8,
                "smoothing": "curve",
                "closed": false,
                "isOutline": false,
                "overrideColor": "abundant",
                "points": [
                    { "x": 0.0, "y": 0.8, "dirX": 0, "dirY": 0, "bucket": 0, "multiplier": 0 },
                    { "x": 0.2, "y": 0.8, "dirX": 0, "dirY": -1, "bucket": 0, "multiplier": 1 },
                    { "x": 0.4, "y": 0.8, "dirX": 0, "dirY": -1, "bucket": 2, "multiplier": 1 },
                    { "x": 0.6, "y": 0.8, "dirX": 0, "dirY": -1, "bucket": 4, "multiplier": 1 },
                    { "x": 0.8, "y": 0.8, "dirX": 0, "dirY": -1, "bucket": 5, "multiplier": 1 },
                    { "x": 1.0, "y": 0.8, "dirX": 0, "dirY": 0, "bucket": 0, "multiplier": 0 },
                    { "x": 1.0, "y": 1.0, "dirX": 0, "dirY": 0, "bucket": 0, "multiplier": 0 },
                    { "x": 0.0, "y": 1.0, "dirX": 0, "dirY": 0, "bucket": 0, "multiplier": 0 },
                    { "x": 0.0, "y": 0.8, "dirX": 0, "dirY": 0, "bucket": 0, "multiplier": 0 }
                ]
            }
        ]
    },
    circle: {
        "name": "Circle",
        "layers": [
            {
                "system": "polar",
                "originX": 0.5,
                "originY": 0.5,
                "smoothing": "curve",
                "closed": true,
                "isOutline": true,
                "lineWidth": 4.0,
                "baseRadius": 80,
                "overrideColor": "average",
                "points": Array.from({length: 36}, (_, i) => ({
                    "angle": i * 10,
                    "bucket": i % 6,
                    "multiplier": 1.5
                }))
            }
        ]
    },
    star: {
        "name": "Star",
        "layers": [
            {
                "system": "polar",
                "originX": 0.5,
                "originY": 0.5,
                "smoothing": "line",
                "closed": true,
                "isOutline": false,
                "baseRadius": 50,
                "overrideColor": [1.0, 0.8, 0.2, 1.0],
                "points": Array.from({length: 10}, (_, i) => ({
                    "angle": i * 36,
                    "bucket": i % 6,
                    "multiplier": i % 2 === 0 ? 2.5 : -1.0
                }))
            }
        ]
    },
    bars: {
        "name": "Bars",
        "layers": [
            {
                "system": "cartesian",
                "smoothing": "line",
                "closed": false,
                "isOutline": true,
                "lineWidth": 26.0,
                "overrideColor": "abundant",
                "points": [
                    { "x": 0.1, "y": 0.9, "dirX": 0, "dirY": 0, "bucket": 0, "multiplier": 0 },
                    { "x": 0.1, "y": 0.9, "dirX": 0, "dirY": -1, "bucket": 0, "multiplier": 2.0 }
                ]
            },
            {
                "system": "cartesian",
                "smoothing": "line",
                "closed": false,
                "isOutline": true,
                "lineWidth": 26.0,
                "overrideColor": "abundant",
                "points": [
                    { "x": 0.26, "y": 0.9, "dirX": 0, "dirY": 0, "bucket": 1, "multiplier": 0 },
                    { "x": 0.26, "y": 0.9, "dirX": 0, "dirY": -1, "bucket": 1, "multiplier": 2.0 }
                ]
            },
            {
                "system": "cartesian",
                "smoothing": "line",
                "closed": false,
                "isOutline": true,
                "lineWidth": 26.0,
                "overrideColor": "abundant",
                "points": [
                    { "x": 0.42, "y": 0.9, "dirX": 0, "dirY": 0, "bucket": 2, "multiplier": 0 },
                    { "x": 0.42, "y": 0.9, "dirX": 0, "dirY": -1, "bucket": 2, "multiplier": 2.0 }
                ]
            },
            {
                "system": "cartesian",
                "smoothing": "line",
                "closed": false,
                "isOutline": true,
                "lineWidth": 26.0,
                "overrideColor": "abundant",
                "points": [
                    { "x": 0.58, "y": 0.9, "dirX": 0, "dirY": 0, "bucket": 3, "multiplier": 0 },
                    { "x": 0.58, "y": 0.9, "dirX": 0, "dirY": -1, "bucket": 3, "multiplier": 2.0 }
                ]
            },
            {
                "system": "cartesian",
                "smoothing": "line",
                "closed": false,
                "isOutline": true,
                "lineWidth": 26.0,
                "overrideColor": "abundant",
                "points": [
                    { "x": 0.74, "y": 0.9, "dirX": 0, "dirY": 0, "bucket": 4, "multiplier": 0 },
                    { "x": 0.74, "y": 0.9, "dirX": 0, "dirY": -1, "bucket": 4, "multiplier": 2.0 }
                ]
            },
            {
                "system": "cartesian",
                "smoothing": "line",
                "closed": false,
                "isOutline": true,
                "lineWidth": 26.0,
                "overrideColor": "abundant",
                "points": [
                    { "x": 0.9, "y": 0.9, "dirX": 0, "dirY": 0, "bucket": 5, "multiplier": 0 },
                    { "x": 0.9, "y": 0.9, "dirX": 0, "dirY": -1, "bucket": 5, "multiplier": 2.0 }
                ]
            }
        ]
    }
};

let currentShape = JSON.parse(JSON.stringify(presets.jello));
jsonEditor.value = JSON.stringify(currentShape, null, 2);

function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let amplitudes = [0, 0, 0, 0, 0, 0];
let targetAmplitudes = [0, 0, 0, 0, 0, 0];
let idleTime = 0;

function updateAudioSimulation() {
    if (Math.random() > 0.8) {
        for(let i=0; i<6; i++) {
            targetAmplitudes[i] = Math.random() * 1.5;
        }
    }
    for(let i=0; i<6; i++) {
        amplitudes[i] += (targetAmplitudes[i] - amplitudes[i]) * 0.2;
    }
}

function drawLayer(layer, rect) {
    if (!layer.points || layer.points.length === 0) return;
    
    const system = layer.system || "cartesian";
    const smoothing = layer.smoothing || "line";
    const closed = layer.closed || false;
    const isOutline = layer.isOutline || false;
    
    const originX = layer.originX !== undefined ? Number(layer.originX) : 0.5;
    const originY = layer.originY !== undefined ? Number(layer.originY) : 0.5;
    const cx = rect.width * originX;
    const cy = rect.height * originY;
    
    const breatheAmplitude = Number(layer.breatheAmplitude) || 0;
    const breatheSpeed = Number(layer.breatheSpeed) || 1.0;
    const idleOffset = breatheAmplitude > 0 ? Math.sin(idleTime * breatheSpeed) * breatheAmplitude : 0;
    
    const globalScale = Math.min(rect.width, rect.height) * 0.4 * 0.75;

    let calculatedPoints = [];
    
    for (const pt of layer.points) {
        let bucket = Number(pt.bucket) || 0;
        if (bucket < 0) bucket = 0;
        if (bucket > 5) bucket = 5;
        
        let multiplier = pt.multiplier !== undefined ? Number(pt.multiplier) : 1.0;
        let amp = amplitudes[bucket] * multiplier * globalScale;
        
        if (system === "polar") {
            let angle = (Number(pt.angle) || 0) * (Math.PI / 180.0);
            let baseRadius = (Number(layer.baseRadius) || 50) + idleOffset;
            let r = baseRadius + amp;
            calculatedPoints.push({
                x: cx + r * Math.cos(angle),
                y: cy + r * Math.sin(angle)
            });
        } else {
            let baseX = (Number(pt.x) || 0) * rect.width;
            let baseY = (Number(pt.y) || 0) * rect.height;
            let dirX = Number(pt.dirX) || 0;
            let dirY = Number(pt.dirY) || 0;
            calculatedPoints.push({
                x: baseX + (amp * dirX) + (idleOffset * dirX),
                y: baseY + (amp * dirY) + (idleOffset * dirY)
            });
        }
    }

    if (calculatedPoints.length === 0) return;

    ctx.beginPath();
    let first = calculatedPoints[0];
    ctx.moveTo(first.x, first.y);

    if (smoothing === "curve" && calculatedPoints.length > 1) {
        let previous = first;
        let limit = calculatedPoints.length + (closed ? 1 : 0);
        for (let i = 1; i <= limit; i++) {
            if (i === calculatedPoints.length && !closed) break;
            let current = calculatedPoints[i % calculatedPoints.length];
            let midX = (previous.x + current.x) / 2.0;
            let midY = (previous.y + current.y) / 2.0;
            ctx.quadraticCurveTo(previous.x, previous.y, midX, midY);
            previous = current;
        }
    } else {
        for (let i = 1; i < calculatedPoints.length; i++) {
            ctx.lineTo(calculatedPoints[i].x, calculatedPoints[i].y);
        }
        if (closed) {
            ctx.lineTo(first.x, first.y);
        }
    }

    if (closed) {
        ctx.closePath();
    }

    let colorStr = "rgba(0, 113, 227, 0.8)";
    if (layer.overrideColor) {
        if (Array.isArray(layer.overrideColor) && layer.overrideColor.length === 4) {
            let [r, g, b, a] = layer.overrideColor;
            colorStr = `rgba(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)}, ${a})`;
        } else if (layer.overrideColor === "abundant") {
            colorStr = "rgba(255, 45, 85, 0.9)";
        } else if (layer.overrideColor === "average") {
            colorStr = "rgba(100, 210, 255, 0.9)";
        }
    }

    if (isOutline) {
        ctx.lineWidth = Number(layer.lineWidth) || 2.0;
        ctx.strokeStyle = colorStr;
        ctx.stroke();
    } else {
        ctx.fillStyle = colorStr;
        ctx.fill();
    }
}

function render() {
    idleTime += 0.05;
    updateAudioSimulation();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (currentShape && currentShape.layers) {
        for (const layer of currentShape.layers) {
            drawLayer(layer, { width: canvas.width, height: canvas.height });
        }
    }
    
    requestAnimationFrame(render);
}


/* GUI Editor Logic */

function syncCodeToGui() {
    jsonEditor.value = JSON.stringify(currentShape, null, 2);
    renderGUI();
}

function updateState(updater) {
    updater();
    syncCodeToGui();
}

let advancedModeState = {};

function toggleAdvanced(layerIdx) {
    advancedModeState[layerIdx] = !advancedModeState[layerIdx];
    renderGUI();
}



function renderGUI() {
    guiEditor.innerHTML = '';
    if (!currentShape.layers) currentShape.layers = [];

    currentShape.layers.forEach((layer, layerIndex) => {
        const layerDiv = document.createElement('div');
        layerDiv.className = 'gui-layer';
        
        let colorType = "array";
        if (layer.overrideColor === "abundant") colorType = "abundant";
        else if (layer.overrideColor === "average") colorType = "average";

        const isAdvanced = advancedModeState[layerIndex] || false;

        layerDiv.innerHTML = `
            <div class="gui-layer-header">
                <span>Layer ${layerIndex + 1}</span>
                <button class="btn-danger" onclick="deleteLayer(${layerIndex})">Delete Layer</button>
            </div>
            
            <div class="gui-row">
                <label>System</label>
                <select onchange="updateLayer(${layerIndex}, 'system', this.value)">
                    <option value="cartesian" ${layer.system === 'cartesian' || !layer.system ? 'selected' : ''}>Cartesian</option>
                    <option value="polar" ${layer.system === 'polar' ? 'selected' : ''}>Polar</option>
                </select>
            </div>
            
            <div class="gui-row">
                <label>Smoothing</label>
                <select onchange="updateLayer(${layerIndex}, 'smoothing', this.value)">
                    <option value="line" ${layer.smoothing === 'line' || !layer.smoothing ? 'selected' : ''}>Line</option>
                    <option value="curve" ${layer.smoothing === 'curve' ? 'selected' : ''}>Curve</option>
                </select>
            </div>

            <div class="gui-row">
                <label>Closed Path</label>
                <select onchange="updateLayer(${layerIndex}, 'closed', this.value === 'true')">
                    <option value="false" ${!layer.closed ? 'selected' : ''}>No</option>
                    <option value="true" ${layer.closed ? 'selected' : ''}>Yes</option>
                </select>
            </div>

            <div class="gui-row">
                <label>Style</label>
                <select onchange="updateLayer(${layerIndex}, 'isOutline', this.value === 'true')">
                    <option value="false" ${!layer.isOutline ? 'selected' : ''}>Fill</option>
                    <option value="true" ${layer.isOutline ? 'selected' : ''}>Outline (Stroke)</option>
                </select>
            </div>
            
            <div class="gui-row">
                <label>Color Algorithm</label>
                <select onchange="updateColorType(${layerIndex}, this.value)">
                    <option value="array" ${colorType === 'array' ? 'selected' : ''}>Custom Random RGBA</option>
                    <option value="abundant" ${colorType === 'abundant' ? 'selected' : ''}>Abundant Artwork</option>
                    <option value="average" ${colorType === 'average' ? 'selected' : ''}>Average Artwork</option>
                </select>
            </div>
            
            <div class="gui-row" style="margin-top: 15px;">
                <label style="font-weight: bold; color: var(--primary-color); cursor: pointer;" onclick="toggleAdvanced(${layerIndex})">
                    ${isAdvanced ? '▼ Hide Points Array' : '▶ Edit Points Array (Advanced)'}
                </label>
            </div>
        `;

        if (isAdvanced) {
            const pointsContainer = document.createElement('div');
            pointsContainer.className = 'gui-points';
            
            if (!layer.points) layer.points = [];
            layer.points.forEach((pt, ptIndex) => {
                const isPolar = layer.system === "polar";
                const ptDiv = document.createElement('div');
                ptDiv.className = 'gui-point';
                
                let posInputs = isPolar ? `
                    <div class="gui-row"><label>Angle</label><input type="range" min="0" max="360" value="${pt.angle || 0}" oninput="updatePointLive(${layerIndex}, ${ptIndex}, 'angle', this.value)" onchange="updatePoint(${layerIndex}, ${ptIndex}, 'angle', this.value)"></div>
                ` : `
                    <div class="gui-row"><label>X</label><input type="range" min="0" max="1" step="0.05" value="${pt.x || 0}" oninput="updatePointLive(${layerIndex}, ${ptIndex}, 'x', this.value)" onchange="updatePoint(${layerIndex}, ${ptIndex}, 'x', this.value)"></div>
                    <div class="gui-row"><label>Y</label><input type="range" min="0" max="1" step="0.05" value="${pt.y || 0}" oninput="updatePointLive(${layerIndex}, ${ptIndex}, 'y', this.value)" onchange="updatePoint(${layerIndex}, ${ptIndex}, 'y', this.value)"></div>
                    <div class="gui-row"><label>Dir X</label><input type="range" min="-1" max="1" step="0.1" value="${pt.dirX || 0}" oninput="updatePointLive(${layerIndex}, ${ptIndex}, 'dirX', this.value)" onchange="updatePoint(${layerIndex}, ${ptIndex}, 'dirX', this.value)"></div>
                    <div class="gui-row"><label>Dir Y</label><input type="range" min="-1" max="1" step="0.1" value="${pt.dirY || 0}" oninput="updatePointLive(${layerIndex}, ${ptIndex}, 'dirY', this.value)" onchange="updatePoint(${layerIndex}, ${ptIndex}, 'dirY', this.value)"></div>
                `;

                ptDiv.innerHTML = `
                    <div class="gui-point-header">
                        <span>Point ${ptIndex + 1}</span>
                        <button class="btn-danger" onclick="deletePoint(${layerIndex}, ${ptIndex})">X</button>
                    </div>
                    <div class="point-grid" style="display: flex; flex-direction: column;">
                        ${posInputs}
                        <div class="gui-row">
                            <label>Bucket</label>
                            <select onchange="updatePoint(${layerIndex}, ${ptIndex}, 'bucket', this.value)">
                                ${[0,1,2,3,4,5].map(b => `<option value="${b}" ${pt.bucket == b ? 'selected' : ''}>${b}</option>`).join('')}
                            </select>
                        </div>
                        <div class="gui-row">
                            <label>Bounce</label>
                            <input type="range" min="-3" max="3" step="0.1" value="${pt.multiplier || 0}" oninput="updatePointLive(${layerIndex}, ${ptIndex}, 'multiplier', this.value)" onchange="updatePoint(${layerIndex}, ${ptIndex}, 'multiplier', this.value)">
                        </div>
                    </div>
                `;
                pointsContainer.appendChild(ptDiv);
            });

            const btnAddPoint = document.createElement('button');
            btnAddPoint.className = 'btn-add';
            btnAddPoint.textContent = '+ Add Point';
            btnAddPoint.onclick = () => addPoint(layerIndex);
            pointsContainer.appendChild(btnAddPoint);

            layerDiv.appendChild(pointsContainer);
        }

        guiEditor.appendChild(layerDiv);
    });
}

window.updateLayer = (layerIdx, key, val) => {
    updateState(() => { currentShape.layers[layerIdx][key] = val; });
};
window.updateColorType = (layerIdx, type) => {
    updateState(() => {
        if (type === "array") currentShape.layers[layerIdx].overrideColor = [1.0, 1.0, 1.0, 1.0];
        else currentShape.layers[layerIdx].overrideColor = type;
    });
};
window.updatePointLive = (layerIdx, ptIdx, key, val) => {
    currentShape.layers[layerIdx].points[ptIdx][key] = Number(val);
};
window.updatePoint = (layerIdx, ptIdx, key, val) => {
    updateState(() => { currentShape.layers[layerIdx].points[ptIdx][key] = Number(val); });
};
window.deleteLayer = (layerIdx) => {
    updateState(() => { currentShape.layers.splice(layerIdx, 1); });
};
window.deletePoint = (layerIdx, ptIdx) => {
    updateState(() => { currentShape.layers[layerIdx].points.splice(ptIdx, 1); });
};
window.addPoint = (layerIdx) => {
    updateState(() => {
        const isPolar = currentShape.layers[layerIdx].system === "polar";
        const newPt = isPolar ? { angle: 0, bucket: 0, multiplier: 1 } : { x: 0.5, y: 0.5, dirX: 0, dirY: -1, bucket: 0, multiplier: 1 };
        if (!currentShape.layers[layerIdx].points) currentShape.layers[layerIdx].points = [];
        currentShape.layers[layerIdx].points.push(newPt);
    });
};

btnAddLayer.addEventListener('click', () => {
    updateState(() => {
        if (!currentShape.layers) currentShape.layers = [];
        currentShape.layers.push({
            system: "cartesian",
            smoothing: "line",
            closed: false,
            isOutline: false,
            points: []
        });
    });
});

tabGui.addEventListener('click', () => {
    tabGui.classList.add('active');
    tabCode.classList.remove('active');
    guiContainer.classList.add('active');
    codeContainer.classList.remove('active');
    
    try {
        currentShape = JSON.parse(jsonEditor.value);
        renderGUI();
    } catch(e) {}
});

tabCode.addEventListener('click', () => {
    tabCode.classList.add('active');
    tabGui.classList.remove('active');
    codeContainer.classList.add('active');
    guiContainer.classList.remove('active');
    
    jsonEditor.value = JSON.stringify(currentShape, null, 2);
});

btnApply.addEventListener('click', () => {
    try {
        currentShape = JSON.parse(jsonEditor.value);
        renderGUI();
        btnApply.textContent = "Applied!";
        btnApply.style.backgroundColor = "#28cd41";
        setTimeout(() => {
            btnApply.textContent = "Apply Code";
            btnApply.style.backgroundColor = "";
        }, 1000);
    } catch (e) {
        alert("Invalid JSON:\n" + e.message);
    }
});

document.getElementById('btn-export').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonEditor.value);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "custom.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});

['jello', 'circle', 'star', 'bars'].forEach(id => {
    document.getElementById('preset-' + id).addEventListener('click', () => {
        currentShape = JSON.parse(JSON.stringify(presets[id]));
        syncCodeToGui();
    });
});

themeToggle.addEventListener('click', () => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark' || (isDark && !currentTheme)) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

syncCodeToGui();
render();
