import React from 'react';

import { createApp } from './v3dApp/app';
import './v3dApp/app.css';

class V3DApp extends React.Component {
  #app = null;
  #PL = null;

  #uuid = window.crypto.randomUUID();
  #containerId = `v3d-container-${this.#uuid}`;
  #fsButtonId = `fullscreen-button-${this.#uuid}`;
  #sceneURL = 'v3dApp/app.gltf';

  async loadApp() {
    ({ app: this.#app, PL: this.#PL } = await createApp({
      containerId: this.#containerId,
      fsButtonId: this.#fsButtonId,
      sceneURL: this.#sceneURL,
    }));
  }

  disposeApp() {
    this.#app?.dispose();
    this.#app = null;

    // dispose Puzzles' visual logic
    this.#PL?.dispose();
    this.#PL = null;
  }

  reloadApp() {
    this.disposeApp();
    this.loadApp();
  }

  componentDidMount() {
    this.loadApp();
  }

  componentWillUnmount() {
    this.disposeApp();
  }

  render() {
    return <div id={this.#containerId}>
      <button onClick={() => this.reloadApp()}>Reload App</button>
      <div
        id={this.#fsButtonId}
        className="fullscreen-button fullscreen-open"
        title="Toggle fullscreen mode"
      ></div>
    </div>;
  }
}

export default V3DApp;
