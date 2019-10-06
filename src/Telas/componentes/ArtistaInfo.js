import React, { Component } from 'react';

class ArtistaInfo extends Component {
	render() {
		return (
			<div>
				{/* Irá aparecer em telas pequenas/ medias */}
				<div style={{ padding: 30, backgroundColor: "#f5f5f5 " }} className="center hide-on-large-only">
					<i
						style={{ cursor: "pointer" }}
						onClick={() => this.props.voltar()}
						className="small material-icons"
					>arrow_back
					</i>

					<span style={{ paddingLeft: 10, fontSize: 45, marginRight: 30 }}>{this.props.item.artistName}</span>
				</div>

				{/* Irá aparecer em telas Grandes */}
				<div className="hide-on-med-and-down center"
					style={{
						border: "1px solid grey",
						height: 440, width: 310,
						position: "fixed",
						right: "2%",
						marginTop: "1vh",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						backgroundColor: "#fafafa"
					}}
				>
					<div style={{ marginTop: 120 }} className="grey-text">Artista</div>
					<h3 style={{ margin: 0, padding: 0 }}>{this.props.item.artistName}</h3>

					<div style={{ marginTop: 20 }} className="grey-text">Gênero</div>
					<h5 style={{ margin: 0, padding: 0 }}>{this.props.item.primaryGenreName}</h5>
					<button
						style={{
							marginTop: 30
						}}
						className="btn-large white black-text waves-effect"
						onClick={() => this.props.voltar()}
					>
						Voltar</button>
				</div>
			</div>
		)
	}
}

export default ArtistaInfo