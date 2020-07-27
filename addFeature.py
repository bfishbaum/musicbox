import os
import shutil
import string
import sys


def replaceTemplateWithFeature(input, feature): 
	featureCap = feature.capitalize()
	x = input.replace("template", feature)
	x = x.replace("Template", featureCap)
	return x

if (len(sys.argv) != 2) :
	exit("Incorrect number of argumnents")

featureName = sys.argv[1]
files = ["Template.tsx", "Template.module.css", "templateSlice"]
src = ".storage/template/"
dest = "./src/features/" + featureName + "/"
try:
	if(os.path.exists(dest)):
		print("Feature already exists. Exiting")	
		exit(0)
	os.mkdir(dest)
	for root, dirs, files in os.walk(src):
		for f in files:
			fin = open(root + f, "rt")
			fout = open(dest + replaceTemplateWithFeature(f, featureName), "wt+")
			for line in fin:
				fout.write(replaceTemplateWithFeature(line, featureName))

	exit(0)
except Exception as e:
	print("Error occurred",e)
	exit(0)

