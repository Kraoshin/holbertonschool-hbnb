import xml.etree.ElementTree as ET


def serialize_to_xml(dictionary, filename):
    """
    Serializes a Python dictionary to XML and saves it
    to the given filename.
    """
    root = ET.Element("data")

    for key, value in dictionary.items():
        item = ET.SubElement(root, key)
        item.text = str(value)

    tree = ET.ElementTree(root)
    tree.write(filename, encoding='utf-8', xml_declaration=True)

def deserialize_from_xml(filename):
    """
    Deserializes XML data from a file
    and returns a Python dictionary.
    """
   try:
        tree = ET.parse(filename)
        root = tree.getroot()

        deserialized_dict = {child.tag: child.text for child in root}

        return deserialized_dict
    except FileNotFoundError:
        print(f"Error: The file {filename} was not found.")
        return None
    except ET.ParseError as e:
        print(f"Error parsing XML: {e}")
        return None
