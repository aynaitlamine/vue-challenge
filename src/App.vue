<script>
import { QuillEditor } from "@vueup/vue-quill";

export default {
	components: {
		QuillEditor,
	},
	data() {
		return {
			editorOption: {},
			content: "<h2>I am Example</h2>",
		};
	},
	methods: {
		handleDrop(e) {
			const txt = e.dataTransfer.getData("Text");
			const quil = this.$refs.myEditor.getQuill();
			var selection = quil.getSelection(true);
			quil.insertEmbed(selection.index, txt);
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
			<div>hello</div>
			<div>from</div>
			<div>world</div>
			<div>vue</div>
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
</style>
