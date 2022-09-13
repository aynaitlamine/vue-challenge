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
			quil.insertText(selection.index, txt);
			console.log(quil);
		},
		handleTest() {
			console.log("test");
		},
	},
};
</script>
<template>
	<div @dragover.prevent @drop.prevent>
		<quill-editor
			ref="myEditor"
			content-type="html"
			:options="editorOption"
			v-model:content="content"
			@drop="handleDrop"
			@focus="handleTest">
		</quill-editor>
	</div>
	<div>hello</div>
	<div>hi</div>
</template>
<style></style>
