---
---
# Random Section


<span id="generateButton" class="block">
God Is
</span>

<span class="block">

<input type="radio" id="fipRadio" name="editionGroup" checked />
<label for="fipRadio">FIP</label>
<input type="radio" id="coaRadio" name="editionGroup" />
<label for="coaRadio">COA</label>
<input type="radio" id="jcimRadio" name="editionGroup" />
<label for="jcimRadio">JCIM</label>

</span>

<span id="resultSpan" class="block">
&nbsp;
</span>

<style>
	span.block {
	display: block;
}

span.block + span.block {
  margin-top: 2rem;
}

span#generateButton {
  display: inline-block;
  padding: 1.5em 3em 1.5em 3em;
  background-color: #ccc;
}

span#generateButton:hover {
  border: 1px solid blue;
}

input#fipRadio {
  margin-left: 2em;
}

span#resultSpan {
  font-size: 2em;
}

</style>



<script>


var getSection = function() {
	if (document.getElementById("coaRadio").checked)
		var sections = coaSections;
	else if (document.getElementById("fipRadio").checked)
		var sections = fipSections;
	else
		var sections = jcimSections;
	var max = sections.length;
	var num = Math.floor( (Math.random() * max) );
	document.getElementById("resultSpan").textContent = sections[num];
};

if (typeof(window) !== "undefined") {
	window.addEventListener("load", function() {

		document.onkeydown = function(e) {
			e = e || window.event;
			if (e.keyCode == 13)
			{
					getSection();
					return false;
			}
			return true;
		};

		document.getElementById("generateButton").onclick = getSection;
	});
}


var fipSections = ["T-In",
"T-1.I",
"T-1.II",
"T-1.III",
"T-1.IV",
"T-1.V",
"T-1.VI",
"T-1.VII",
"T-2.I",
"T-2.II",
"T-2.III",
"T-2.IV",
"T-2.V",
"T-2.VI",
"T-2.VII",
"T-2.VIII",
"T-3.I",
"T-3.II",
"T-3.III",
"T-3.IV",
"T-3.V",
"T-3.VI",
"T-3.VII",
"T-4.in",
"T-4.I",
"T-4.II",
"T-4.III",
"T-4.IV",
"T-4.V",
"T-4.VI",
"T-4.VII",
"T-5.in",
"T-5.I",
"T-5.II",
"T-5.III",
"T-5.IV",
"T-5.V",
"T-5.VI",
"T-5.VII",
"T-6.in",
"T-6.I",
"T-6.II",
"T-6.III",
"T-6.IV",
"T-6.V",
"T-6.V-A",
"T-6.V-B",
"T-6.V-C",
"T-7.I",
"T-7.II",
"T-7.III",
"T-7.IV",
"T-7.V",
"T-7.VI",
"T-7.VII",
"T-7.VIII",
"T-7.IX",
"T-7.X",
"T-7.XI",
"T-8.I",
"T-8.II",
"T-8.III",
"T-8.IV",
"T-8.V",
"T-8.VI",
"T-8.VII",
"T-8.VIII",
"T-8.IX",
"T-9.I",
"T-9.II",
"T-9.III",
"T-9.IV",
"T-9.V",
"T-9.VI",
"T-9.VII",
"T-9.VIII",
"T-10.in",
"T-10.I",
"T-10.II",
"T-10.III",
"T-10.IV",
"T-10.V",
"T-11.in",
"T-11.I",
"T-11.II",
"T-11.III",
"T-11.IV",
"T-11.V",
"T-11.VI",
"T-11.VII",
"T-11.VIII",
"T-12.I",
"T-12.II",
"T-12.III",
"T-12.IV",
"T-12.V",
"T-12.VI",
"T-12.VII",
"T-12.VIII",
"T-13.in",
"T-13.I",
"T-13.II",
"T-13.III",
"T-13.IV",
"T-13.V",
"T-13.VI",
"T-13.VII",
"T-13.VIII",
"T-13.IX",
"T-13.X",
"T-13.XI",
"T-14.in",
"T-14.I",
"T-14.II",
"T-14.III",
"T-14.IV",
"T-14.V",
"T-14.VI",
"T-14.VII",
"T-14.VIII",
"T-14.IX",
"T-14.X",
"T-14.XI",
"T-15.I",
"T-15.II",
"T-15.III",
"T-15.IV",
"T-15.V",
"T-15.VI",
"T-15.VII",
"T-15.VIII",
"T-15.IX",
"T-15.X",
"T-15.XI",
"T-16.I",
"T-16.II",
"T-16.III",
"T-16.IV",
"T-16.V",
"T-16.VI",
"T-16.VII",
"T-17.I",
"T-17.II",
"T-17.III",
"T-17.IV",
"T-17.V",
"T-17.VI",
"T-17.VII",
"T-17.VIII",
"T-18.I",
"T-18.II",
"T-18.III",
"T-18.IV",
"T-18.V",
"T-18.VI",
"T-18.VII",
"T-18.VIII",
"T-18.IX",
"T-19.I",
"T-19.II",
"T-19.III",
"T-19.IV",
"T-19.IV-A",
"T-19.IV-B",
"T-19.IV-C",
"T-19.IV-D",
"T-20.I",
"T-20.II",
"T-20.III",
"T-20.IV",
"T-20.V",
"T-20.VI",
"T-20.VII",
"T-20.VIII",
"T-21.in",
"T-21.I",
"T-21.II",
"T-21.III",
"T-21.IV",
"T-21.V",
"T-21.VI",
"T-21.VII",
"T-21.VIII",
"T-22.in",
"T-22.I",
"T-22.II",
"T-22.III",
"T-22.IV",
"T-22.V",
"T-22.VI",
"T-23.in",
"T-23.I",
"T-23.II",
"T-23.III",
"T-23.IV",
"T-24.in",
"T-24.I",
"T-24.II",
"T-24.III",
"T-24.IV",
"T-24.V",
"T-24.VI",
"T-24.VII",
"T-25.in",
"T-25.I",
"T-25.II",
"T-25.III",
"T-25.IV",
"T-25.V",
"T-25.VI",
"T-25.VII",
"T-25.VIII",
"T-25.IX",
"T-26.I",
"T-26.II",
"T-26.III",
"T-26.IV",
"T-26.V",
"T-26.VI",
"T-26.VII",
"T-26.VIII",
"T-26.IX",
"T-26.X",
"T-27.I",
"T-27.II",
"T-27.III",
"T-27.IV",
"T-27.V",
"T-27.VI",
"T-27.VII",
"T-27.VIII",
"T-28.I",
"T-28.II",
"T-28.III",
"T-28.IV",
"T-28.V",
"T-28.VI",
"T-28.VII",
"T-29.I",
"T-29.II",
"T-29.III",
"T-29.IV",
"T-29.V",
"T-29.VI",
"T-29.VII",
"T-29.VIII",
"T-29.IX",
"T-30.in",
"T-30.I",
"T-30.II",
"T-30.III",
"T-30.IV",
"T-30.V",
"T-30.VI",
"T-30.VII",
"T-30.VIII",
"T-31.I",
"T-31.II",
"T-31.III",
"T-31.IV",
"T-31.V",
"T-31.VI",
"T-31.VII",
"T-31.VIII",
"M-In",
"M-1",
"M-2",
"M-3",
"M-4",
"M-4.I",
"M-4.II",
"M-4.III",
"M-4.IV",
"M-4.V",
"M-4.VI",
"M-4.VII",
"M-4.VIII",
"M-4.IX",
"M-4.X",
"M-5",
"M-5.I",
"M-5.II",
"M-5.III",
"M-6",
"M-7",
"M-8",
"M-9",
"M-10",
"M-11",
"M-12",
"M-13",
"M-14",
"M-15",
"M-16",
"M-17",
"M-18",
"M-19",
"M-20",
"M-21",
"M-22",
"M-23",
"M-24",
"M-25",
"M-26",
"M-27",
"M-28",
"M-29",
"C-In",
"C-1",
"C-2",
"C-3",
"C-4",
"C-5",
"C-6",
"C-Ep",
"P-In",
"P-1",
"P-2.in",
"P-2.I",
"P-2.II",
"P-2.III",
"P-2.IV",
"P-2.V",
"P-2.VI",
"P-2.VII",
"P-3.I",
"P-3.II",
"P-3.III",
"S-1.in",
"S-1.I",
"S-1.II",
"S-1.III",
"S-1.IV",
"S-1.V",
"S-2.in",
"S-2.I",
"S-2.II",
"S-2.III",
"S-3.in",
"S-3.I",
"S-3.II",
"S-3.III",
"S-3.IV"
];

var coaSections = ["T–In",
"T–1.1",
"T–1.2",
"T–1.3",
"T–1.4",
"T–1.5",
"T–1.6",
"T–1.7",
"T–1.8",
"T–1.9",
"T–1.10",
"T–1.11",
"T–1.12",
"T–1.13",
"T–1.14",
"T–1.15",
"T–1.16",
"T–1.17",
"T–1.18",
"T–1.19",
"T–1.20",
"T–1.21",
"T–1.22",
"T–1.23",
"T–1.24",
"T–1.25",
"T–1.26",
"T–1.27",
"T–1.28",
"T–1.29",
"T–1.30",
"T–1.31",
"T–1.32",
"T–1.33",
"T–1.34",
"T–1.35",
"T–1.36",
"T–1.37",
"T–1.38",
"T–1.39",
"T–1.40",
"T–1.41",
"T–1.42",
"T–1.43",
"T–1.44",
"T–1.45",
"T–1.46",
"T–1.47",
"T–1.48",
"T–1.49",
"T–1.50",
"T–2.I",
"T–2.II",
"T–2.III",
"T–2.IV",
"T–2.V",
"T–2.VI",
"T–2.VII",
"T–2.VIII",
"T–2.IX",
"T–2.X",
"T–2.XI",
"T–2.XII",
"T–2.XIII",
"T–3.I",
"T–3.II",
"T–3.III",
"T–3.IV",
"T–3.V",
"T–3.VI",
"T–3.VII",
"T–3.VIII",
"T–3.IX",
"T–3.X",
"T–3.XI",
"T–4.I",
"T–4.II",
"T–4.III",
"T–4.IV",
"T–4.V",
"T–4.VI",
"T–4.VII",
"T–4.VIII",
"T–4.IX",
"T–4.X",
"T–4.XI",
"T–5.I",
"T–5.II",
"T–5.III",
"T–5.IV",
"T–5.V",
"T–5.VI",
"T–5.VII",
"T–5.VIII",
"T–5.IX",
"T–5.X",
"T–6.I",
"T–6.II",
"T–6.III",
"T–6.IV",
"T–6.V",
"T–6.VI",
"T–6.VII",
"T–6.VII–A",
"T–6.VII–B",
"T–6.VII–C",
"T–6.VIII",
"T–7.I",
"T–7.II",
"T–7.III",
"T–7.IV",
"T–7.V",
"T–7.VI",
"T–7.VII",
"T–7.VIII",
"T–7.IX",
"T–7.X",
"T–8.I",
"T–8.II",
"T–8.III",
"T–8.IV",
"T–8.V",
"T–8.VI",
"T–8.VII",
"T–8.VIII",
"T–9.I",
"T–9.II",
"T–9.III",
"T–9.IV",
"T–9.V",
"T–9.VI",
"T–9.VII",
"T–9.VIII",
"T–10.I",
"T–10.II",
"T–10.III",
"T–10.IV",
"T–10.V",
"T–11.I",
"T–11.II",
"T–11.III",
"T–11.IV",
"T–11.V",
"T–11.VI",
"T–11.VII",
"T–11.VIII",
"T–11.IX",
"T–12.I",
"T–12.II",
"T–12.III",
"T–12.IV",
"T–12.V",
"T–12.VI",
"T–12.VII",
"T–12.VIII",
"T–12.IX",
"T–12.X",
"T–13.I",
"T–13.II",
"T–13.III",
"T–13.IV",
"T–13.V",
"T–13.VI",
"T–13.VII",
"T–13.VIII",
"T–13.IX",
"T–13.X",
"T–13.XI",
"T–13.XII",
"T–14.I",
"T–14.II",
"T–14.III",
"T–14.IV",
"T–14.V",
"T–14.VI",
"T–14.VII",
"T–14.VIII",
"T–14.IX",
"T–14.X",
"T–14.XI",
"T–14.XII",
"T–15.I",
"T–15.II",
"T–15.III",
"T–15.IV",
"T–15.V",
"T–15.VI",
"T–15.VII",
"T–15.VIII",
"T–15.IX",
"T–15.X",
"T–15.XI",
"T–16.I",
"T–16.II",
"T–16.III",
"T–16.IV",
"T–16.V",
"T–16.VI",
"T–16.VII",
"T–17.I",
"T–17.II",
"T–17.III",
"T–17.IV",
"T–17.V",
"T–17.VI",
"T–17.VII",
"T–17.VIII",
"T–17.IX",
"T–18.I",
"T–18.II",
"T–18.III",
"T–18.IV",
"T–18.V",
"T–18.VI",
"T–18.VII",
"T–18.VIII",
"T–19.I",
"T–19.II",
"T–19.III",
"T–19.IV",
"T–19.IV–A",
"T–19.IV–B",
"T–19.IV–C",
"T–19.IV–D",
"T–20.I",
"T–20.II",
"T–20.III",
"T–20.IV",
"T–20.V",
"T–20.VI",
"T–20.VII",
"T–20.VIII",
"T–21.I",
"T–21.II",
"T–21.III",
"T–21.IV",
"T–21.V",
"T–21.VI",
"T–21.VII",
"T–22.I",
"T–22.II",
"T–22.III",
"T–22.IV",
"T–22.V",
"T–22.VI",
"T–22.VII",
"T–22.VIII",
"T–22.IX",
"T–23.I",
"T–23.II",
"T–23.III",
"T–23.IV",
"T–24.I",
"T–24.II",
"T–24.III",
"T–24.IV",
"T–24.V",
"T–24.VI",
"T–24.VII",
"T–25.I",
"T–25.II",
"T–25.III",
"T–25.IV",
"T–25.V",
"T–25.VI",
"T–25.VII",
"T–25.VIII",
"T–25.IX",
"T–25.X",
"T–26.I",
"T–26.II",
"T–26.III",
"T–26.IV",
"T–26.V",
"T–26.VI",
"T–26.VII",
"T–26.VIII",
"T–26.IX",
"T–26.X",
"T–27.I",
"T–27.II",
"T–27.III",
"T–27.IV",
"T–27.V",
"T–27.VI",
"T–27.VII",
"T–27.VIII",
"T–27.IX",
"T–27.X",
"T–27.XI",
"T–28.I",
"T–28.II",
"T–28.III",
"T–28.IV",
"T–28.V",
"T–28.VI",
"T–28.VII",
"T–29.I",
"T–29.II",
"T–29.III",
"T–29.IV",
"T–29.V",
"T–29.VI",
"T–29.VII",
"T–29.VIII",
"T–29.IX",
"T–29.X",
"T–30.I",
"T–30.II",
"T–30.III",
"T–30.IV",
"T–30.V",
"T–30.VI",
"T–30.VII",
"T–30.VIII",
"T–30.IX",
"T–31.I",
"T–31.II",
"T–31.III",
"T–31.IV",
"T–31.V",
"T–31.VI",
"T–31.VII",
"T–31.VIII",
"T–31.IX",
"M–In",
"M–1",
"M–2",
"M–3",
"M–4",
"M–4.I",
"M–4.II",
"M–4.III",
"M–4.IV",
"M–4.V",
"M–4.VI",
"M–4.VII",
"M–4.VIII",
"M–4.IX",
"M–4.X",
"M–5",
"M–5.I",
"M–5.II",
"M–5.III",
"M–6",
"M–7",
"M–8",
"M–9",
"M–10",
"M–11",
"M–12",
"M–13",
"M–14",
"M–15",
"M–16",
"M–17",
"M–18",
"M–19",
"M–20",
"M–21",
"M–22",
"M–23",
"M–24",
"M–25",
"M–26",
"M–27",
"M–28",
"M–29",
"C–In",
"C–1",
"C–2",
"C–3",
"C–4",
"C–5",
"C–6",
"C–Ep",
"Cam–1",
"Cam–2",
"Cam–3",
"Cam–4",
"Cam–5",
"Cam–6",
"Cam–7",
"Cam–8",
"Cam–9",
"Cam–10",
"Cam–11",
"Cam–12",
"Cam–13",
"Cam–14",
"Cam–15",
"Cam–16",
"Cam–17",
"Cam–18",
"Cam–19",
"Cam–20",
"Cam–21",
"Cam–22",
"Cam–23",
"Cam–24",
"Cam–25",
"Cam–26",
"Cam–27",
"Cam–28",
"Cam–29",				
"Cam–30",
"Cam–31",
"Cam–32",
"Cam–33"
];

var jcimSections = [
"T–In",
"T–1.I",
"T–1.II",
"T–2.I",
"T–2.II",
"T–2.III",
"T–2.IV",
"T–2.V",
"T–2.VI",
"T–3.I",
"T–3.II",
"T–3.III",
"T–3.IV",
"T–3.V",
"T–3.VI",
"T–3.VII",
"T–3.VIII",
"T–3.IX",
"T–4.I",
"T–4.II",
"T–4.III",
"T–4.IV",
"T–4.V",
"T–4.VI",
"T–4.VII",
"T–4.VIII",
"T–4.IX",
"T–5.I",
"T–5.II",
"T–5.III",
"T–5.IV",
"T–5.V",
"T–5.VI",
"T–5.VII",
"T–5.VIII",
"T–5.IX",
"T–6.I",
"T–6.II",
"T–6.III",
"T–6.IV",
"T–6.V",
"T–6.V–a",
"T–6.V–b",
"T–6.V–c",
"T–7.I",
"T–7.II",
"T–7.III",
"T–7.IV",
"T–7.V",
"T–7.VI",
"T–7.VII",
"T–7.VIII",
"T–7.IX",
"T–7.X",
"T–7.XI",
"T–7.XII",
"T–8.I",
"T–8.II",
"T–8.III",
"T–8.IV",
"T–8.V",
"T–8.VI",
"T–8.VII",
"T–8.VIII",
"T–8.IX",
"T–8.X",
"T–8.XI",
"T–9.I",
"T–9.II",
"T–9.III",
"T–9.IV",
"T–9.V",
"T–9.VI",
"T–9.VII",
"T–9.VIII",
"T–9.IX",
"T–9.X",
"T–9.XI",
"T–10.I",
"T–10.II",
"T–10.III",
"T–10.IV",
"T–10.V",
"T–10.VI",
"T–10.VII",
"T–10.VIII",
"T–11.I",
"T–11.II",
"T–11.III",
"T–11.IV",
"T–11.V",
"T–11.VI",
"T–11.VII",
"T–11.VIII",
"T–11.IX",
"T–11.X",
"T–12.I",
"T–12.II",
"T–12.III",
"T–12.IV",
"T–12.V",
"T–12.VI",
"T–12.VII",
"T–13.I",
"T–13.II",
"T–13.III",
"T–13.IV",
"T–13.V",
"T–13.VI",
"T–13.VII",
"T–13.VIII",
"T–13.IX",
"T–14.I",
"T–14.II",
"T–14.III",
"T–14.IV",
"T–14.V",
"T–14.VI",
"T–14.VII",
"T–15.I",
"T–15.II",
"T–15.III",
"T–15.IV",
"T–15.V",
"T–15.VI",
"T–15.VII",
"T–15.VIII",
"T–15.IX",
"T–15.X",
"T–15.XI",
"T–16.I",
"T–16.II",
"T–16.III",
"T–16.IV",
"T–16.V",
"T–16.VI",
"T–16.VII",
"T–16.VIII",
"T–17.I",
"T–17.II",
"T–17.III",
"T–17.IV",
"T–17.V",
"T–17.VI",
"T–17.VII",
"T–17.VIII",
"T–17.IX",
"T–18.I",
"T–18.II",
"T–18.III",
"T–18.IV",
"T–18.V",
"T–18.VI",
"T–18.VII",
"T–18.VIII",
"T–18.IX",
"T–18.X",
"T–18.XI",
"T–19.I",
"T–19.II",
"T–19.III",
"T–19.IV",
"T–19.V",
"T–19.V–a",
"T–19.V–b",
"T–19.V–c",
"T–19.IV–d",
"T–20.I",
"T–20.II",
"T–20.III",
"T–20.IV",
"T–20.V",
"T–20.VI",
"T–20.VII",
"T–20.VIII",
"T–20.IX",
"T–21.I",
"T–21.II",
"T–21.III",
"T–21.IV",
"T–21.V",
"T–21.VI",
"T–21.VII",
"T–21.VIII",
"T–21.IX",
"T–22.I",
"T–22.II",
"T–22.III",
"T–22.IV",
"T–22.V",
"T–22.VI",
"T–22.VII",
"T–23.I",
"T–23.II",
"T–23.III",
"T–23.IV",
"T–23.V",
"T–24.I",
"T–24.II",
"T–24.III",
"T–24.IV",
"T–24.V",
"T–24.VI",
"T–24.VII",
"T–24.VIII",
"T–25.I",
"T–25.II",
"T–25.III",
"T–25.IV",
"T–25.V",
"T–25.VI",
"T–25.VII",
"T–25.VIII",
"T–25.IX",
"T–25.X",
"T–26.I",
"T–26.II",
"T–26.III",
"T–26.IV",
"T–26.V",
"T–26.VI",
"T–26.VII",
"T–26.VIII",
"T–26.IX",
"T–26.X",
"T–26.XI",
"T–27.I",
"T–27.II",
"T–27.III",
"T–27.IV",
"T–27.V",
"T–27.VI",
"T–27.VII",
"T–27.VIII",
"T–27.IX",
"T–28.I",
"T–28.II",
"T–28.III",
"T–28.IV",
"T–28.V",
"T–28.VI",
"T–28.VII",
"T–28.VIII",
"T–29.I",
"T–29.II",
"T–29.III",
"T–29.IV",
"T–29.V",
"T–29.VI",
"T–29.VII",
"T–29.VIII",
"T–29.IX",
"T–29.X",
"T–30.I",
"T–30.II",
"T–30.III",
"T–30.IV",
"T–30.V",
"T–30.VI",
"T–30.VII",
"T–30.VIII",
"T–30.IX",
"T–31.I",
"T–31.II",
"T–31.III",
"T–31.IV",
"T–31.V",
"T–31.VI",
"T–31.VII",
"T–31.VIII"
];
</script>
