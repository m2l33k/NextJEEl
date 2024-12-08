from PyPDF2 import PdfReader

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ''
    for page in reader.pages:
        text += page.extract_text()

    # Add spacing between each letter
    spaced_text = ' '.join(list(text))
    return spaced_text
