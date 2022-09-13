<script>
import { QuillEditor, Quill } from "@vueup/vue-quill";
import ProcLink from "./util";

export default {
	components: {
		QuillEditor,
	},
	data() {
		return {
			editorOption: {},
			content:
				"<h2>Monsieur, dont le numéro de registre national est, domicile a   </h2>",
		};
	},
	methods: {
		handleDrop(e) {
			const txt = e.dataTransfer.getData("Text");
			const quil = this.$refs.myEditor.getQuill();
			const selection = quil.getSelection(true);
			// quil.insertEmbed(selection.index, txt);

			ProcLink.blotName = "variable";
			ProcLink.className = "variable";
			ProcLink.tagName = "span";

			Quill.register({
				"formats/proc-link": ProcLink,
			});

			var text = { text: txt, value: txt };
			quil.insertEmbed(selection.index, "variable", text);
		},
	},
};
</script>
<template>
	<div>
		<quill-editor
			ref="myEditor"
			content-type="html"
			:options="editorOption"
			v-model:content="content"
			@drop="handleDrop"
			@dragover.prevent
			@drop.prevent>
		</quill-editor>
		<div class="variables">
			<div>Nom</div>
			<div>Prenom</div>
			<div>Register national</div>
			<div>Address postal</div>
		</div>
	</div>
</template>
<style>
.variables {
	display: flex;
}

.variables > div {
	background-color: #ddd;
	padding: 10px;
	margin: 10px;
	color: #242424;
	user-select: all;
	cursor: pointer;
}

.variable {
	padding: 10px;
	background: #ddd;
}
</style>
